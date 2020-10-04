<template>
  <div class="container-fluid marketing">
    <div class="row featurette mt-4 home-banner">
      <div class="col-10 mx-auto text-center">
        <p class="text-white home-banner-text">時尚人氣品牌</p>
      </div>
    </div>
    <div class="col-10 mx-auto">
      <div class="row featurette mt-4">
        <div class="col-7">
          <h2 class="featurette-heading mt-2">
            簡約設計
            <span class="text-muted">眼鏡工藝 專業服務</span>
          </h2>
          <p class="lead mt-4">
            深信經過努力, 加上尖端的科技, 破傳統精益求精. 工藝不遺餘力
          </p>
        </div>
        <div class="col-5">
          <img
            class="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            src="https://images.unsplash.com/photo-1486125305436-b7144b0734f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Generic placeholder image"
          />
        </div>
      </div>
      <div class="row featurette mt-4">
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            src="https://images.unsplash.com/photo-1539036776273-021ec1d78bec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Eye Exam"
            style="filter: blur(1px); -webkit-filter: blur(1px)"
          />
        </div>

        <div class="col-md-7">
          <h2 class="featurette-heading mt-2">
            專業的驗配
            <span class="text-muted">個人化體驗</span>
          </h2>
          <p class="lead mt-4">個人化鏡片, 提供最清晰的影像, 最佳的配戴體驗</p>
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
};
</script>
