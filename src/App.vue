<template>
  <div id="app">
    <div id="nav">
     <comp-nav/>
     <comp-slider/>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import compNav from './components/nav/nav.vue'
//import compSlider from './components/slider/carousel.vue'

export default {
  name: 'Home',
  components: {
   // HelloWorld
   compNav,
  // compSlider
  }
}
</script>


