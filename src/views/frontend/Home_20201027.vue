<template>
  <div class="container-fluid">
    <div class="container">
      <img
        src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/WCder4GWlxtPdJmEoUCx8ans8hH4kmRTpSNanchhN3pZKwIi1hFAgD0DzsleEgPg69vW7ybPKqNaB5AjzjZ9Bb2hXeFauHFkVLw8gPHmmyepGwqWJPZq9775gHscg9dZ.jpeg"
        alt="Notebook"
        style="width: 100%"
      />
      <div class="content">
        <h1>Heading</h1>
        <p>Lorem ipsum..</p>
      </div>
    </div>
    <div class="row">
      <img
        src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/WCder4GWlxtPdJmEoUCx8ans8hH4kmRTpSNanchhN3pZKwIi1hFAgD0DzsleEgPg69vW7ybPKqNaB5AjzjZ9Bb2hXeFauHFkVLw8gPHmmyepGwqWJPZq9775gHscg9dZ.jpeg"
        alt=""
        class="home-banner"
      />
      <div class="row featurette link-image" @click="showProducts">
        <div class="home-banner-text h2">春夏眼鏡系列<br />現已登場</div>
      </div>
    </div>

    <div class="wrap">
      <div class="row featurette">
        <div class="col-12 col-md-6 col-lg-6 mt-4">
          <img
            style="width: 100%"
            class="featurette-image img-fluid mx-auto link-image rounded-image"
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/xLXGAX8GMvavxlkTKh5q1jpkvQeilf3yyxr17AzsEpeJwAscQtP85q1QPLf0fHNtPaI8vi7mMM1JARMlcKyVGohhziPBcS7kyulUklkwZR5dxpEtn4u9OtDmbRdkDH7j.jpeg"
            alt="International Brand"
            @click="showProducts"
          />

          <h2 class="featurette-heading h2 mt-1">
            國際品牌
            <span class="text-muted"></span>
          </h2>
          <p class="h4">
            代理多個國際品牌鏡架，款式新穎，品質優良。<br />提供多元化及最合適的選擇。
          </p>
        </div>

        <div class="col-12 col-md-6 col-md-6 mt-4">
          <img
            class="featurette-image img-fluid mx-auto link-image rounded-image"
            data-src="holder.js/500x500/auto"
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DSW6mFICO5fiLMwll6Z22U643Ar6toD4EscDyhmFY61dpYIn8uW3PXBu8pHDzXYzmEYGqO7ZdJhE4TMqkaxbuIFQo2tfK6yATHkbFTzIszaYnC5itUDSZ8VAP6Dq6cSs.jpeg"
            alt="Eye Exam"
            style="width: 100%; filter: blur(1px); -webkit-filter: blur(1px)"
            @click="showLens"
          />
          <h2 class="featurette-heading h2 mt-1">
            專業的驗配
            <span class="text-muted"></span>
          </h2>
          <p class="h4">
            個人化體驗，專業服務。<br />提供最清晰的影像，最佳的配戴體驗。
          </p>
        </div>
      </div>
    </div>
    <br />
    <HotProduct />
    <br />
  </div>
</template>

<script>
import HotProduct from "@/components/frontend/HotProductsComponent.vue";
// @ is an alias to /src

export default {
  components: {
    HotProduct,
  },
  name: "Home",
  methods: {
    showProducts() {
      this.$router.push("Products");
    },
    showLens() {
      this.$router.push("Lens");
    },
  },
};
</script>
