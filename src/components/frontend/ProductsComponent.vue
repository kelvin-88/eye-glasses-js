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
      <div class="card-text d-flex">
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
