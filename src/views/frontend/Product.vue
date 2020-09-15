<template>
  <div class="home">
    <div class="container">
      <Loading :active.sync="isLoading"></Loading>
      <Product :product="product" :showShoppingCart="true" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Product from "@/components/frontend/ProductComponent.vue";

export default {
  components: {
    Product,
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      // let api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/ec/products?page=${page}`;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${this.$route.params.id}`;
      this.$http
        .get(api)
        .then((response) => {
          this.isLoading = false;
          // console.log(response);
          console.log(response.data.data);
          // this.products = JSON.parse(JSON.stringify(response.data.data));
          this.product = response.data.data;
          if (this.product && this.product.imageUrl) {
            this.url = this.product.imageUrl[0];
          }
          console.log(this.product);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
  },
  data() {
    return {
      isLoading: false,
      product: {},
      url: ",",
      favorites: [],
    };
  },
};
</script>
