<template>
    <div>
     <compNav/>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import compNav from '../components/nav/nav.vue'

export default {
  name: 'Home',
  components: {
   // HelloWorld
   compNav
  }
}
</script>