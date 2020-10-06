<template>
  <div class="container-fluid">
    <div class="col-12 col-md-10 col-lg-8 mx-auto">
      <h2 class="mt-4" style="text-align: center !important">暢銷眼鏡</h2>
      <div
        id="carouselExampleControls"
        class="carousel slide m-2"
        data-ride="carousel"
      >
        <div class="row">
          <div class="col-12 col-md-10 col-lg-8 mx-auto">
            <div class="carousel-inner shadow-sm">
              <div
                v-for="product in tempProducts"
                v-bind:key="product.id"
                :class="{
                  'carousel-item': true,
                  active: firstTempProduct == product,
                }"
              >
                <!--img class="d-block w-100" :src="product.imageUrl[0]" :alt="product.id" /-->
                <Product
                  @showProduct="showProduct"
                  :product="product"
                  :showShoppingCart="false"
                  :url="product.imageUrl[0]"
                />
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Product from "@/components/frontend/ProductComponent.vue";

export default {
  components: {
    Product,
  },
  name: "HotProduct",
  created() {
    this.getProducts();
  },
  data() {
    return {
      tempProducts: [],
      firstTempProduct: {},
      pages: { current_page: 1, total_pages: 0 },
    };
  },
  methods: {
    showProduct(id) {
      console.log("showProduct received: ", id);
      // logs: received: 'foo'
      // this.$router.push({ name: "Product", params: { id: id } });
      this.$router.push({ path: `/product/${id}` });
    },
    getProducts(page = 1) {
      this.isLoading = true;

      // let api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/ec/products?page=${page}`;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`;

      this.$http
        .get(url)
        .then((response) => {
          this.isLoading = false;
          // console.log(response);
          console.log(response.data.data);
          // this.products = JSON.parse(JSON.stringify(response.data.data));
          this.products = response.data.data;

          this.pages.current_page = response.data.meta.pagination.current_page;
          this.pages.total_pages = response.data.meta.pagination.total_pages;
          // this.pages.total_pages = 5;

          // this.pages.current_page = 2;
          // this.pages.total_pages = 5;

          const fromArray = this.products;
          for (var i = 0; i < 5; i++) {
            const x = Math.random() * (fromArray.length - 1);
            this.tempProducts.push(fromArray.splice(x, 1).pop());
          }
          // this.tempProducts = this.products;

          console.log("tempProducts", this.tempProducts);
          this.firstTempProduct = {};
          if (this.tempProducts.length > 0) {
            this.firstTempProduct = this.tempProducts[0];
          }
          console.log("firstProduct", this.firstTempProduct);
          i = 0;
          for (i = 0; i < this.tempProducts.length; i++) {
            if (i === 0) {
              this.tempProducts[i].class = "carousel-item active";
            } else {
              this.tempProducts[i].class = "carousel-item";
            }
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
        });
    },
  },
};
</script>

<style scoped>
.carousel-inner {
  /* height: 420px; */
}

.carousel .carousel-item {
  /* height: 300px; */
}

.carousel .carousel-item img {
  /* min-height: 200px;
  max-height: 300px; */
  object-fit: cover;
}

.carousel-control-next,
.carousel-control-prev {
  filter: invert(100%);
}
</style>
