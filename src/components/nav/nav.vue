<template>
  <header>
    <nav class="follow navbar bg-dark py-2" v-if="followUs">
      <div class="d-flex align-items-center justify-content-between">
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
    </nav>
    <nav class="navbar navbar-expand-md navbar-light  bg-light">
      <div class="container-fluid d-flex align-items-center">
        <router-link to="/" class="navbar-brand border-0">
          <img src="../../assets/logo.png" alt="" class="logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="d-sm-block d-lg-flex ml-auto align-items-center">
            <router-link to="/" class="nav-link mx-1">HOME</router-link>
            <router-link to="/warnerinternational" class="mx-1 nav-link"
              >WARNER INTERNATIONAL</router-link
            >
            <div class="d-artist">
                 <ul>
              <li>
                <a href="#" class="nav-link mx-1 text-lg-center">DOMESTIC ARTIST</a>
                <ul>
                  <li class="px-3">
                     <router-link to="/faith" class="nav-link text-light border-0 mr-5">ARTIST NAME</router-link>
                     <router-link to="/faith" class="nav-link text-light border-0 mr-5">ARTIST NAME</router-link>
                     <router-link to="/faith" class="nav-link text-light border-0 mr-5">ARTIST NAME</router-link>
                     <router-link to="/faith" class="nav-link text-light border-0 mr-5">ARTIST NAME</router-link>
                  </li>
                </ul>
              </li>
            </ul>
            </div>
            <div class="news">
                 <ul>
              <li>
                <a href="#" class="nav-link mx-1 text-lg-center">NEWS</a>
                <ul>
                  <li class="px-3 py-3">
                     <router-link to="/blog" class="nav-link text-light border-0 mr-3">BLOG</router-link>
                     <router-link to="/blog" class="nav-link text-light border-0 ">MEDIA RELEASE</router-link>
                     <router-link to="/blog" class="nav-link text-light border-0 ">WARNER CARE</router-link>
                  </li>
                </ul>
              </li>
            </ul>
            </div>
          
            <router-link to="/contact" class=" nav-link mx-1">CONTACT</router-link>

            <button
              href=""
              class="d-sm-none d-lg-block btn rounded-pill ml-3 d-flex bg-dark align-items-center text-light mt-sm-2 mx-sm-0"
              @click="followUs = !followUs"
            >
              FOLLOW US
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-plus ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      followUs: false,
      domesticartist:false
    };
  },
};
</script>
