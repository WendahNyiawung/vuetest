<template>
  <div id="app">
    <div id="nav">
     <comp-nav/>
     <comp-slider/>
    </div>
    <router-view/>
    <div class="follow navbar bg-dark py-5  d-lg-none">
      <div class="d-flex align-items-center justify-content-around">
        <a href="" class="btn btn-dark rounded-pill mt-2 mx-2">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-facebook"
          >
            <path
              d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            />
          </svg>
        </a>
        <a href="" class="btn btn-dark rounded-pill mt-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-instagram"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path
              d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"
            />
          </svg>
        </a>
        <a href="" class="btn btn-dark rounded-pill mt-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-twitter"
          >
            <path
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            />
          </svg>
        </a>
        <a href="" class="btn btn-dark rounded-pill mt-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-youtube"
          >
            <path
              d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"
            />
            <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
          </svg>
        </a>
      </div>
       </div>
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


