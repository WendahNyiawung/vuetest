<template>
  <div>
    <section class="artist-intro">
      <div class="artist-bio">
        <h1>ARTIST NAME</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quis
          omnis accusantium magni quae, vero totam nam dicta cum repellat enim
          amet blanditiis dignissimos ea aliquam, sequi ducimus natus minima?
          Est minima fugit corpori
        </p>
      </div>
    </section>
    <div class="about-artist py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              quibusdam exercitationem eligendi et provident, minima voluptatum
              fugit ab. Corporis dolorum facere provident numquam voluptatibus
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              quibusdam exercitationem eligendi et provident, minima voluptatum
              fugit ab. Corporis dolorum facere provident numquam voluptatibus
              fugit ab. Corporis dolorum facere provident numquam voluptatibus
              fugit ab. Corporis dolorum facere provident numquam voluptatibus
            </p>
          </div>
          <div class="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              quibusdam exercitationem eligendi et provident, minima voluptatum
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              quibusdam exercitationem eligendi et provident, minima voluptatum
              fugit ab. Corporis dolorum facere provident numquam voluptatibus
            </p>
          </div>
        </div>
        <div class="artist-video ">
         <iframe src="https://www.youtube.com/embed/t4jeQDuaMo8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="video"></iframe>
        </div>
        <div class="artist-galery d-flex mt-5 pt-5">
          <img src="../assets/img/1.jpg" style="width:35%">
          <img src="../assets/img/2.jpg" style="width:30%; height:30%;">
          <img src="../assets/img/3.jpg" style="width:35%;">
        </div>
     </div>
     <div class="artist-contact mt-3 py-5">
           <div class="d-flex align-items-center justify-content-center social">
        <a href="" class="btn  rounded-pill mt-2 mx-2">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-facebook text-light"
          >
            <path
              d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            />
          </svg>
        </a>
        <a href="" class="btn  rounded-pill mt-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-instagram text-light"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path
              d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"
            />
          </svg>
        </a>
        <a href="" class="btn  rounded-pill mt-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-twitter text-light"
          >
            <path
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            />
          </svg>
        </a>
      </div>
      </div>
      <button class="btn btn-light mt-5 buy-btn">BUY NOW</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import compNav from '../components/nav/nav.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
};
</script>