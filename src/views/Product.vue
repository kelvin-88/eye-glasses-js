<template>
  <div class="home">
    <!--Product title="abc" /-->
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/ProductComponent.vue";

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
      //let api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/ec/products?page=${page}`;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${this.$route.params.id}`;

      this.$http
        .get(api)
        .then((response) => {
          this.isLoading = false;
          //console.log(response);
          console.log(response.data.data);
          //this.products = JSON.parse(JSON.stringify(response.data.data));
          this.tempProduct = response.data.data;

          console.log(this.tempProduct);
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
      tempProduct: {
        imageUrl: [],
      },
    };
  },
};
</script>
