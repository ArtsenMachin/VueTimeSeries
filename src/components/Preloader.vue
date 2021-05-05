<template>
 <transition name="fade">
    <div v-if="show" class='preloader'>
        <div class="preloader__image" :style="image"></div>
    </div>
 </transition>   
</template>

<script>
export default {
    name: 'preloader',
    data(){
        return{
            show:true,
            image:{ backgroundImage: "url(https://cdn.discordapp.com/attachments/723608599615504446/835819603573211136/Time-Series-Calculaeta.gif)"}
        }
    },
    mounted(){
        this.showToggle();
    },
    methods:{
        showToggle(){
            setTimeout(()=>{
                this.show=false;
            },2000)
        }
    }
}
</script>

<style scoped>
.preloader {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #FDFDFF;
  z-index: 1001;
}
.preloader__image {
  position: relative;
  top: 25% !important;
  margin: 0 auto !important;
  width: 320px;
  height: 320px;
  background-size: 320px;
  background-repeat: no-repeat;
  background-position: 50% 50%;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
