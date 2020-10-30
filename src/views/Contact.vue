<template>
    <div class="contact">
     <div class="container contact-info">
       <h3 class="">Reach out to us</h3>
       <p class="font-weight-bold">Phone: <span class="fon font-weight-light">+27 10 593 4260</span></p>
       <p class="font-weight-bold mt-2">email:
         <a href="mailto:ContactZA@warnermusic.com" class="font-weight-light">ContactZA@warnermusic.com</a>
       </p>
       <p class="font-italic">Please note: 
         <span class="f font-normal">This is an in-coming mailbox only that does not reply directly to submissions. Warner Music South Africa does NOT charge a fee for demo submissions, listening sessions or for setting up meetings. Neither do we work with other parties who claim to offer this service.</span>
       </p>
       <h2 class="mt-3">Demo submission</h2>
       <p class="mt-4 mb-4">Fields marked with an <span class="text-danger">*</span> are required</p>
       <form action="" method="post" class="pb-5">
         <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Name <span class="text-danger">*</span></label>
             <input type="text" class="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" required>
         </div>
         <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Email <span class="text-danger">*</span></label>
             <input type="email" class="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" required>
         </div>
         <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Artist/Group name<span class="text-danger">*</span></label>
             <input type="text" class="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" required>
         </div>
         <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Please paste a link to listen/download your demo <span class="text-danger">*</span></label>
            <p>Please share your demo via streaming link e.g: Soundcloud, Youtube, Dropbox etc</p>
            <p>Demo submission guidelines: We don’t accept links from DATAFILEHOST. This service is blocked and we will not be able to access your music. Please ensure that your uploaded or linked audio is of a high quality.</p>
             <input type="text" class="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" required>
         </div>
         <div class="mb-5">
            <label for="exampleInputEmail1" class="form-label">Tell us a bit about yourself! Where are you from? What inspires you? <span class="text-danger">*</span></label>
            <p>Share a brief artist biog/and or influences</p>
           <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="8" required></textarea>
         </div>
         <div class="mb-5">
            <label for="exampleInputEmail1" class="form-label font-weight-bolder">Band / Artist social media profiles </label>
            <p>If you have a social media presence, please share links to your social media profiles.  One profile per line</p>
           <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="8"></textarea>
         </div>
         <div class="mb-5">
            <label for="exampleInputEmail1" class="form-label font-weight-bold">List any awards, media coverage, radio play</label>
            <p>Please share any radio play, awards or recognition you have received</p>
           <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="8"></textarea>
         </div>
         <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label font-weight-bold">Any additional comments</label>
           <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="8"></textarea>
         </div>
         <button type="submit" class="btn btn-dark rounded-0 ">Submit</button>
       </form>
       <h3 class="mt-2">Where to find us</h3>
       <div class="row mt-2  pb-lg-5">
         <div class="col-lg-6">
           <h5>google map goes here</h5>
           <img src="../assets/img/640x360.png" alt="" srcset="" class="w-75">

         </div>
         <div class="col-lg-3">
            <p class="font font-weight-bold m-0">Warner Music South Africa</p>
            <p class="font font-weight-bold m-0">1 Saxon Road</p>
            <p class="font font-weight-bold">Hyde Park</p>
            <p class="font font-weight-bold m-0">2196</p>
            <div class="mt-2">
              <p class="font font-weight-bold m-0">Gauteng</p>
              <p class="font font-weight-bold m-0">South Africa</p>
              <p class="font font-weight-bold m-0">Planet Earth</p>
            </div>
         </div>
       </div>
       <div class="follow navbar bg-dark py-2 mt-4 d-lg-none">
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
       </div>
     </div>
    </div>
</template>
