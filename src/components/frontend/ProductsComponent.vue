<template>
  <div class="card" @click="showProduct">
    <img class="card-img img-fluid" :src="url" />

    <div class="card-img-overlay d-flex justify-content-end">
      <a href="#" class="card-link text-danger like" @click.prevent>
        <div v-if="product.favorite">
          <i class="fas fa-heart"></i>
        </div>
        <div v-else>
          <i class="far fa-heart"></i>
        </div>
      </a>
    </div>
    <div class="card-body">
      <h4 class="card-title">{{ product.title }}</h4>
      <h6 v-if="false" class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
      <p class="card-text">{{ product.content }}</p>
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
