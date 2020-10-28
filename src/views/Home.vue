<template>
  <div>
    <compSlider/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import compSlider from '../components/slider/carousel.vue'

export default {
  name: 'Home',
  components: {
   // HelloWorld
   compSlider
  }
}
</script>
