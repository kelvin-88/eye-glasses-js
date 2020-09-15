<template>
  <div class="container marketing">
    <div class="row featurette mt-4">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          簡約設計
          <span class="text-muted">眼鏡工藝</span>
        </h2>
        <p class="lead">深信經過努力, 加上尖端的科技, 破傳統精益求精. 工藝不遺餘力</p>
      </div>
      <div class="col-md-5">
        <img
          class="featurette-image img-fluid mx-auto"
          data-src="holder.js/500x500/auto"
          src="https://images.unsplash.com/photo-1574422282888-4c30455ccdcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="Generic placeholder image"
        />
      </div>
    </div>
    <div class="row featurette mt-4">
      <div class="col-md-5">
        <img
          class="featurette-image img-fluid mx-auto"
          data-src="holder.js/500x500/auto"
          src="https://images.unsplash.com/photo-1486125305436-b7144b0734f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="Generic placeholder image"
        />
      </div>
      <div class="col-md-7">
        <h2 class="featurette-heading">
          尖端科技
          <span class="text-muted">人體工學</span>
        </h2>
        <p class="lead">緊貼面型, 輕巧, 舒適, 堅固，耐用</p>
      </div>
    </div>

    <HotProduct />
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
