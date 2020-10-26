<template>
  <div class="card single-item" @click.prevent="showProduct">
    <div class="img-container">
      <img
        class="card-img-top store-img img-fluid link-image selected-image"
        :src="url"
      />

      <div class="favorite">
        <a
          href="#"
          class="card-link text-danger like"
          @click.stop.prevent="updateFavorite(product)"
        >
          <div v-if="product.favorite">
            <i class="fas fa-heart fa-2x"></i>
          </div>
          <div v-else>
            <i class="far fa-heart fa-2x"></i>
          </div>
        </a>
      </div>
    </div>

    <div class="card-body p-1">
      <div class="card-text">
        <div class="d-flex">
          <div class="mr-auto p-2 align-self-center">
            <span class="h4">{{ product.title }}</span>
          </div>
          <span class="p-2 original-price align-self-center"
            >${{ product.origin_price | toThousandSeperator }}</span
          >
          <span class="p-2 price align-self-center"
            >${{ product.price | toThousandSeperator }}</span
          >
        </div>
        <div class="d-flex pb-1">
          <a
            @click.stop.prevent="addToCart"
            class="btn products-addToCart btn-lg flex-grow-1"
          >
            <i class="fas fa-shopping-cart"></i> 加入購物車
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    // id: String,
    // title: String,
    // content: String,
    // description: String,
    url: String,
  },
  methods: {
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
    updateFavorite(product, event) {
      // console.log("updateFavorite", product);
      // if (!this.showShoppingCart) {
      //   return;
      // }

      this.favorites = JSON.parse(localStorage.getItem("favorite"));
      if (this.favorites === null) {
        this.favorites = [];
      }
      console.log("favorites", this.favorites);
      // this.$set(this.product, "favorite", false);

      if (product.favorite) {
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
          // this.$set(this.product, "favorite", product.favorite);
        }
      }
      product.favorite = !product.favorite;
      // this.$set(this.product, "favorite", product.favorite);
      this.$forceUpdate();

      // this.refreshFavorite();
    },
    showProduct() {
      console.log("showProduct", this.product);
      // See the callback in the child comp reference
      // in the parent comp
      // this.$emit("askParentToDoStuff", id);
      // console.log("showProduct1");
      this.$emit("showProduct", this.product.id);
      // this.$router.push({ name: "product", params: { id: this.id } });
    },
  },
};
</script>
