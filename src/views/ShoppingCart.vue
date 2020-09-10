<template>
  <div class="home">
    <!--Product title="abc" /-->
    <div class="container">
      <Loading :active.sync="isLoading"></Loading>
      <div class="row">
        <div class="col-lg-12 mt-3" v-for="item in items" v-bind:key="item.id">
          {{item}}
          <Product :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/ShoppingCartComponent.vue";

export default {
  components: {
    Product,
  },
  created() {
    this.getShoppingCart(1);
  },
  data() {
    return {
      isLoading: false,
      title: "",
      items: [],
      tempProduct: {
        imageUrl: [],
      },
      tempIndex: 0,
      user: {
        token: "",
        uuid: "",
      },
      pages: { current_page: 1, total_pages: 0 },
    };
  },
  methods: {
    getShoppingCart(page = 1) {
      this.isLoading = true;

      // let api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/ec/products?page=${page}`;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping?page=${page}`;

      this.$http
        .get(api)
        .then((response) => {
          this.isLoading = false;
          // console.log(response);
          console.log(response.data.data);
          // this.products = JSON.parse(JSON.stringify(response.data.data));
          this.items = response.data.data;

          this.pages.current_page = response.data.meta.pagination.current_page;
          this.pages.total_pages = response.data.meta.pagination.total_pages;
          // this.pages.total_pages = 5;

          // this.pages.current_page = 2;
          // this.pages.total_pages = 5;

          console.log(this.items);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
        });
    },
  },
};
</script>
