<template>
  <div class="blogs py-4">
      <div class="container">
    <div class="row">
      <div class="col-md-9">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="card mt-sm-2 border border-light"
          style="width: 40rem; margin-left:3rem; background-color:black;"
        >
          <img src="../assets/img/640x360.png" class="card-img-top" alt="..." />
          <div class="card-body px-3">
            <h5 class="card-title">{{ blog.title }}</h5>
            <p class="card-text">
              {{ blog.body }}
            </p>
            <router-link to="/blogpost" class="btn btn-light">Raad More</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <ul class="list-group" style="background-color:black;">
          <li class="list-group-item " style="font-size:1.3rem; font-weight:600;color:#000">CATEGORIES</li>
           <router-link to="/blog" class="list-group-item">BLOG</router-link>
           <router-link to="/blog" class="list-group-item">MEDIA RELEASE</router-link>
           <router-link to="/blog" class="list-group-item">WARNER CARE</router-link>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogs: [
        {
          img: "../assets/img/640x360.png",
          title: "Blog Title 1",
          body:
            "lorem ipsum,dolor sit amet consectetur adipisicing elit.Ipsum architecto, voluptatibus sunt obcaecati veniam distinctio ducimus sit voluptatibus sunt obcaecati veniam distinctio ducimus sit voluptatibus sunt obcaecati veniam distinctio ducimus sit",
        },
        {
          img: "../assets/img/640x360.png",
          title: "Blog Title 2",
          body:
            "lorem ipsum,dolor sit amet consectetur adipisicing elit.Ipsum architecto, voluptatibus sunt obcaecati veniam distinctio ducimus sit voluptatibus sunt obcaecati veniam distinctio ducimus sit voluptatibus sunt obcaecati veniam distinctio ducimus sit",
        },
        {
          img: "../assets/img/640x360.png",
          title: "Blog Title 3",
          body:
            "lorem ipsum,dolor sit amet consectetur adipisicing elit.Ipsum architecto, voluptatibus sunt obcaecati veniam distinctio ducimus sit voluptatibus sunt obcaecati veniam distinctio ducimus sit voluptatibus sunt obcaecati veniam distinctio ducimus sit",
        },
      ],
    };
  },
};
</script>