<template>
  <div class="container-fluid marketing">
    <div
      class="row featurette mt-4 home-banner link-image"
      @click="showProducts"
    >
      <div class="text-white home-banner-text">春夏眼鏡系列<br />現已登場</div>
    </div>
    <div class="col-10 mx-auto">
      <div class="row featurette mt-4">
        <div class="col-12 col-md-7 col-lg-7">
          <h2 class="featurette-heading mt-2">
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
            src="https://images.unsplash.com/photo-1486125305436-b7144b0734f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Generic placeholder image"
          />
        </div>
      </div>
      <div class="row featurette mt-4">
        <div class="col-12 col-md-5 col-md-5" @click="showLens">
          <img
            class="featurette-image img-fluid mx-auto link-image rounded-image"
            data-src="holder.js/500x500/auto"
            src="https://images.unsplash.com/photo-1539036776273-021ec1d78bec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Eye Exam"
            style="filter: blur(1px); -webkit-filter: blur(1px)"
          />
        </div>

        <div class="col-12 col-md-7 col-lg-7">
          <h2 class="featurette-heading mt-2">
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
