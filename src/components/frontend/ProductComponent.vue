<template>
  <div class="card" @click="showProduct">
    <Loading :active.sync="isLoading"></Loading>
    <div v-if="product.title" class="row">
      <div class="col-lg-7">
        <img class="card-img-detail" :src="product.imageUrl[0]" />
        <div v-if="false" class="card-img-overlay d-flex justify-content-end">
          <a href="#" class="card-link text-danger like">
            <i class="far fa-heart"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-5 mt-4">
        <h4 class="card-title">{{ product.title }}</h4>
        <p></p>

        <p class="card-text text-muted">{{ product.content }}</p>

        <p class="card-subtitle mt-2" v-html="product.description"></p>

        <div class="row mt-4">
          <div class="col-lg-7 mt-2">
            <div class="row">
              <span class="ml-3 price mr-4">${{product.price | toThousandSeperator}}</span>
              <span class="original-price mt-1">${{product.origin_price | toThousandSeperator}}</span>
            </div>
          </div>
          <div v-if="showShoppingCart" class="col-lg-5 mt-2 align-items-end">
            <a @click="addToCart" class="btn btn-danger">
              <i class="fas fa-shopping-cart"></i> 加入購物車
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    showShoppingCart: Boolean,

    // id: String,
    // title: String,
    // content: String,
    // description: String,
    // origin_price: Number,
    // price: Number,
    // url: String,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    showProduct() {
      // See the callback in the child comp reference
      // in the parent comp
      // this.$emit("askParentToDoStuff", id);
      // console.log("showProduct1");
      this.$emit("showProduct", this.product.id);
      // this.$router.push({ name: "product", params: { id: this.id } });
    },
    addToCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const data = {
        product: this.product.id,
        quantity: "1",
      };
      this.$http
        .post(api, data)
        .then((response) => {
          this.isLoading = false;
          // console.log(response);
          console.log(response.data.data);
          this.$bus.$emit("update-cart", () => {});
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
          console.log(error.response.data.errors[0]);
          this.$bus.$emit("show-toast", error.response.data.errors[0]);
          this.$bus.$emit("update-cart", () => {});
        });
    },
  },
};
</script>
<style scoped>
.card {
  margin-top: 0rem;
}

.card-img-detail {
  width: 100%;
  height: 417px;
}

.original-price {
  text-decoration: line-through;
  padding: 0px;
  font-size: 16px;
}

.price {
  font-size: 22px;
  color: #ff0000;
}
</style>
