<template>
  <div class="row">
    <div class="col-3">
      <img class="card-img img-fluid" :src="item.product.imageUrl[0]" />
    </div>
    <div class="col-1">
      <p class="card-title">{{item.product.category}}</p>
    </div>
    <div class="col-3">
      <h4 class="card-text">{{item.product.title}}</h4>
    </div>
    <div class="col-2">
      <td class="align-middle">
        <div class="input-group">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-primary"
              type="button"
              @click="quantityUpdata(item.product.id, item.quantity + 1)"
            >+</button>
          </div>
          <input
            id="inlineFormInputGroupUsername"
            type="text"
            class="form-control text-center"
            :value="item.quantity"
            @keyup.enter="quantityUpdata(item.product.id, $event.target.value)"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-primary"
              type="button"
              @click="quantityUpdata(item.product.id, item.quantity - 1)"
              :disabled="item.quantity === 1"
            >-</button>
          </div>
          <button>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    // id: String,
    // title: String,
    // category: String,
    // imageUrl: String,
    // quantity: Number,
  },
  methods: {
    quantityUpdata(id, num) {
      // 避免商品數量低於 0 個
      if (num <= 0) return;

      this.isLoading = true;
      const url = `${this.APIPATH}/api/${this.UUID}/ec/shopping`;

      const data = {
        product: id,
        quantity: num,
      };

      this.$http.patch(url, data).then(() => {
        this.isLoading = false;
        this.getCart();
      });
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
  height: 120px;
}
</style>
