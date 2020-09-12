<template>
  <div class="home">
    <!--Product title="abc" /-->
    <div class="container">
      <div v-for="material in materials" v-bind:key="material">
        <input type="checkbox" :value="material" v-model="selectedMaterials" />
        <label for="material">{{ material }}</label>
      </div>

      <Loading :active.sync="isLoading"></Loading>
      <div class="row">
        <div class="col-lg-4 col-sm-6 mt-3" v-for="product in tempProducts" v-bind:key="product.id">
          <Product
            @showProduct="showProduct"
            :id="product.id"
            :title="product.title"
            :content="product.content"
            :url="product.imageUrl[0]"
            @click="getProduct(product)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/ProductsComponent.vue";

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
      materials: ["樹脂", "塑膠", "金屬"],
      selectedMaterials: [],
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
      console.log("received: ", id);
      // logs: received: 'foo'
      this.$router.push({ name: "Product", params: { id: id } });
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
