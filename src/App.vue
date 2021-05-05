<template>
  <div id='app'>
    <Preloader/>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Preloader from '@/components/Preloader'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Preloader,
    Header,
    Footer
  }
}
</script>


  