<template>
  <div class="card" @click="showProduct">
    <Loading :active.sync="isLoading"></Loading>
    <div v-if="product.title" class="row">
      <div class="col-lg-7">
        <img class="card-img-detail" :src="product.imageUrl[0]" />
        <div class="card-img-overlay d-flex justify-content-end">
          <a href="#" class="card-link text-danger like" @click.prevent="updateFavorite(product)">
            <div v-if="favorite">
              <i class="fas fa-heart"></i>
            </div>
            <div v-else>
              <i class="far fa-heart"></i>
            </div>
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
    product: {
      favorite: false,
    },
    showShoppingCart: Boolean,

    // id: String,
    // title: String,
    // content: String,
    // description: String,
    // origin_price: Number,
    // price: Number,
    // url: String,
  },
  created() {
    // this.refreshFavorite();
    // console.log("created", this.product);
    this.refreshFavorite();
  },
  mounted() {
    // console.log("mounted", this.product);
  },
  updated() {
    // console.log("updated", this.product);
    this.refreshFavorite();
  },
  data() {
    return {
      isLoading: false,
      favorites: [],
      favorite: false,
    };
  },
  methods: {
    refreshFavorite() {
      // console.log("refreshFavorite", this.product);
      this.favorites = JSON.parse(localStorage.getItem("favorite"));
      // console.log("refreshFavorite", this.favorites);
      if (this.favorites === null) {
        this.favorites = [];
      }
      if (this.favorites.includes(this.product.id)) {
        this.favorite = true;
        // this.$set(product, "favorite", true);
      } else {
        this.favorite = false;
        // this.$set(product, "favorite", false);
      }
      // console.log("refreshFavorite", this.favorite);
    },
    updateFavorite(product) {
      // console.log("updateFavorite", product);
      if (!this.showShoppingCart) {
        return;
      }

      this.favorites = JSON.parse(localStorage.getItem("favorite"));
      if (this.favorites === null) {
        this.favorites = [];
      }
      console.log("favorites", this.favorites);
      // this.$set(this.product, "favorite", false);

      if (this.favorite) {
        // remove favorite
        if (this.favorites.includes(product.id)) {
          this.favorites.splice(this.favorites.indexOf("B"), 1);
          localStorage.setItem("favorite", JSON.stringify(this.favorites));
        }
      } else {
        // add favorite
        if (!this.favorites.includes(product.id)) {
          this.favorites.push(product.id);
          localStorage.setItem("favorite", JSON.stringify(this.favorites));
        }
      }
      this.refreshFavorite();
    },
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
          this.$bus.$emit("show-toast-message", "成功加入購物車");
          this.$bus.$emit("update-cart", () => {});
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
          console.log(error.response.data.errors[0]);
          this.$bus.$emit("show-toast-error", error.response.data.errors[0]);
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
