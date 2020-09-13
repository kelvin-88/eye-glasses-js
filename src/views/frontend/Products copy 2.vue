<template>
  <div class="home">
    <!--Product title="abc" /-->
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="product in products" v-bind:key="product.id">
          <div class="card">
            <img class="card-img" :src="product.imageUrl[0]" />
            <div class="card-img-overlay d-flex justify-content-end">
              <a href="#" class="card-link text-danger like">
                <i class="fas fa-heart"></i>
              </a>
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ product.title }}</h4>
              <h6 class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
              <p class="card-text">
                The Vans All-Weather MTE Collection features footwear and
                apparel designed to withstand the elements whilst still looking
                cool.
              </p>
            </div>
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
  name: "Home",
  components: {
    Product,
  },
  created() {
    this.getProducts(1);
  },
  data() {
    return {
      isLoading: false,
      title: "",
      products: [],
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
    getProducts(page = 1) {
      this.isLoading = true;

      // let api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/ec/products?page=${page}`;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`;

      this.$http
        .get(api)
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
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },
  },
};
</script>
