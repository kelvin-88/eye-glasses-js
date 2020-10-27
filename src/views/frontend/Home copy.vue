<template>
  <div class="container-fluid marketing">
    <div class="row featurette home-banner link-image" @click="showProducts">
      <div class="home-banner-text h2">春夏眼鏡系列<br />現已登場</div>
    </div>
    <div class="wrap">
      <div class="row featurette mt-5">
        <div class="col-12 col-md-7 col-lg-7">
          <h2 class="featurette-heading h2 mt-2">
            國際品牌
            <span class="text-muted"></span>
          </h2>
          <p class="lead mt-4">
            代理多個國際品牌鏡架，品質優良， 提供多元化的選擇。
          </p>
        </div>
        <div class="col-12 col-md-5 col-lg-5" @click="showProducts">
          <img
            class="featurette-image img-fluid mx-auto link-image rounded-image"
            data-src="holder.js/500x500/auto"
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/xLXGAX8GMvavxlkTKh5q1jpkvQeilf3yyxr17AzsEpeJwAscQtP85q1QPLf0fHNtPaI8vi7mMM1JARMlcKyVGohhziPBcS7kyulUklkwZR5dxpEtn4u9OtDmbRdkDH7j.jpeg"
            alt="International Brand"
          />
        </div>
      </div>
      <div class="row featurette mt-5">
        <div class="col-12 col-md-5 col-md-5" @click="showLens">
          <img
            class="featurette-image img-fluid mx-auto link-image rounded-image"
            data-src="holder.js/500x500/auto"
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DSW6mFICO5fiLMwll6Z22U643Ar6toD4EscDyhmFY61dpYIn8uW3PXBu8pHDzXYzmEYGqO7ZdJhE4TMqkaxbuIFQo2tfK6yATHkbFTzIszaYnC5itUDSZ8VAP6Dq6cSs.jpeg"
            alt="Eye Exam"
            style="filter: blur(1px); -webkit-filter: blur(1px)"
          />
        </div>

        <div class="col-12 col-md-7 col-lg-7">
          <h2 class="featurette-heading h2 mt-2">
            專業的驗配
            <span class="text-muted">個人化體驗 專業服務</span>
          </h2>
          <p class="lead mt-4">
            個人化鏡片，提供最清晰的影像，最佳的配戴體驗。
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
