<template>
  <div class="home">
    <!--Product title="abc" /-->
    <div class="container">
      <Loading :active.sync="isLoading"></Loading>
      <div class="h4"><strong>我的最愛</strong></div>
      <hr />
      <div class="row" v-if="tempProducts.length > 0">
        <div
          class="col-lg-4 col-sm-6 mt-3"
          v-for="product in tempProducts"
          v-bind:key="product.id"
        >
          <Product
            @showProduct="showProduct"
            :product="product"
            :url="product.imageUrl[0]"
            @click="getProduct(product)"
          />
        </div>
      </div>
      <div v-else><h4 class="mt-4">我的最愛目前是空的</h4></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/frontend/ProductsComponent.vue";

export default {
  components: {
    Product,
  },
  created() {
    console.log(this.$route.params);
    console.log(this.$route.query);
    this.getProducts(1);
  },
  data() {
    return {
      isLoading: false,
      title: "",
      products: [],
      tempProducts: [],
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
  watch: {
    selectedMaterials: {
      handler: function () {
        console.log(this.selectedMaterials);
        this.filterProducts();
      },
    },
  },
  methods: {
    setFavorites(products) {
      let favorites = JSON.parse(localStorage.getItem("favorite"));
      console.log("setFavorites", favorites);
      if (favorites === null) {
        favorites = [];
      }

      let product = {};
      for (product of products) {
        if (favorites.includes(product.id)) {
          product.favorite = true;
        } else {
          product.favorite = false;
        }
      }
      console.log("setFavorites", products);
    },

    filterProducts() {
      this.tempProducts = [];
      var product;
      for (product of this.products) {
        console.log(product);
        if (this.selectedMaterials.includes(product.category)) {
          this.tempProducts.push(product);
        }
      }
    },
    showProduct(id) {
      console.log("showProduct received: ", id);
      // logs: received: 'foo'
      // this.$router.push({ name: "Product", params: { id: id } });
      this.$router.push({ path: `/product/${id}` });
    },
    getFavorites(products) {
      let favorites = JSON.parse(localStorage.getItem("favorite"));
      // console.log("refreshFavorite", favorites);
      if (favorites === null) {
        favorites = [];
      }

      this.tempProducts = [];
      let product = {};
      for (product of products) {
        if (favorites.includes(product.id)) {
          this.tempProducts.push(product);
        }
      }
      this.setFavorites(products);
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

          console.log(this.products);

          this.getFavorites(this.products);
          // this.tempProducts = this.products;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
        });
    },
    getProduct(item) {
      console.log(item.id);
      this.$router.push({ name: "product", params: { id: item.id } });
    },
  },
};
</script>
