<template>
  <div class="card shadow-sm" @click.prevent="showProduct">
    <img class="img-fluid link-image selected-image" :src="url" />

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

    <div class="flex-row d-flex w-100 p-2">
      <h4 v-if="false" class="card-title">{{ product.title }}</h4>
      <h6 v-if="false" class="card-subtitle mb-2 text-muted">
        Style: VA33TXRJ5
      </h6>
      <p v-if="false" class="card-text">{{ product.content }}</p>

      <div class="mr-auto p-2 align-self-center">
        <span class="h4">{{ product.title }}</span>
      </div>
      <span class="p-2 price align-self-center"
        >${{ product.price | toThousandSeperator }}</span
      >
      <span class="p-2 original-price align-self-center"
        >${{ product.origin_price | toThousandSeperator }}</span
      >
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

<style scoped>
.card {
  margin-top: 0rem;
}

.card-img {
  width: 100%;
  height: 230px;
}
</style>
