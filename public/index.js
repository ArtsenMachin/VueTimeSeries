var app = new Vue({
  el: '#app',
  data:{
      isHiding: true,
      isLoaded: false
  },
  methods:{
      preloader(){
        window.setTimeout(function () {
        this.isLoaded=true;
        this.isHiding=false;
        }, 2000);
      }
    },
    mounted(){
      this.preloader();
    } 
})