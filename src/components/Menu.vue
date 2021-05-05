<template>
        <div class='row text-center' v-if="!isMobile">
            <MenuItem
                v-for="item of items" :key="item.id"
                v-bind:item="item"/>      
    </div>
    <Burger v-else
        v-bind:items="items"/>

</template>


<script>
import MenuItem from "@/components/menuItem"
import Burger from "@/components/Burger"
export default {
  props:['items'],
  components: {
    MenuItem,
    Burger
  },
  data(){
      return{
          isMobile: Boolean
      }
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  methods:{
     updateWidth() {
        if(window.innerWidth>=992){
            this.isMobile=false;
        }else{
             this.isMobile=true;
        }
       
    }
  }
}
</script>


