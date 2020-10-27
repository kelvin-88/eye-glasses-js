<template>
  <div class="products">
    <!--Product title="abc" /-->
    <Loading :active.sync="isLoading"></Loading>
    <div class="row wrap no-gutters mt-2 mb-2">
      <div class="col-md-12 col-lg-2">
        <span class="h3" style="font-weight: bold">系列</span>
        <div
          v-for="category in categories"
          v-bind:key="category"
          class="item-category"
        >
          <input
            type="checkbox"
            class="mt-3"
            :value="category"
            v-model="selectedCategories"
          />
          <label for="category" class="mx-2">{{ category }}</label>
        </div>
        <div class="row mt-5 mr-2 no-gutters">
          <label for="price-range" class="h5">
            <span class="h3 mr-3" style="font-weight: bold">格價</span> $1 -
            $10,000</label
          >
          <input
            min="1"
            max="10000"
            type="range"
            v-model="priceRange"
            @change="filterProducts"
            class="form-control-range products-range"
          />
          <span class="h5">${{ priceRange | toThousandSeperator }}</span>
        </div>
      </div>

      <div class="col-md-12 col-lg-10">
        <div class="row no-gutters">
          <div
            class="col-lg-4 col-sm-6 p-2 products"
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
      </div>
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
      priceRange: 10000,
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
      // categories: ["樹脂", "塑膠", "金屬", "經典系列"],
      categories: ["經典系列", "春夏眼鏡系列", "行政眼鏡系列"],
      selectedCategories: [],
      includeCategories: [],
    };
  },
  watch: {
    selectedCategories: {
      handler: function () {
        console.log(this.selectedCategories);
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
      // console.log("filterProducts");
      this.tempProducts = [];
      var product;

      if (this.selectedCategories.length === 0) {
        this.includeCategories = this.categories;
      } else {
        this.includeCategories = this.selectedCategories;
      }
      for (product of this.products) {
        console.log(product);
        // if (this.includeCategories.includes(product.category)) {
        if (this.includeCategories.includes(product.title)) {
          if (product.price <= this.priceRange) {
            this.tempProducts.push(product);
          }
        }
      }
    },
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

          console.log(this.products);
          this.tempProducts = this.products;

          this.setFavorites(this.tempProducts);
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
