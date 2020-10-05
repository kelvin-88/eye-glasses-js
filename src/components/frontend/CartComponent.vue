<template>
  <div class="row">
    <div class="col-6 col-md-4 col-lg-3">
      <img
        style="height: 15vh"
        class="img-fluid"
        :src="item.product.imageUrl[0]"
        @click="showProduct(item)"
      />
    </div>
    <div v-if="false" class="col-1">
      <p class="card-title">{{ item.product.category }}</p>
    </div>
    <div class="col-6 col-md-5 col-lg-4">
      <h4 class="card-text">{{ item.product.title }}</h4>
    </div>
    <div class="col-6 col-md-3 col-lg-2">
      <h5 class="card-text">{{ item.quantity }} x ${{ item.product.price }}</h5>
    </div>
    <div class="col-6 col-md-3 col-lg-2">
      <td class="align-middle">
        <div class="input-group">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-primary"
              type="button"
              @click="quantityUpdata(item.product.id, item.quantity + 1)"
            >
              +
            </button>
          </div>
          <input
            id="qty"
            type="text"
            class="form-control text-center"
            readonly
            style="background: white"
            :value="item.quantity"
            @keyup.enter="quantityUpdata(item.product.id, $event.target.value)"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-primary"
              type="button"
              @click="quantityUpdata(item.product.id, item.quantity - 1)"
              :disabled="item.quantity === 1"
            >
              -
            </button>
          </div>
          <button @click="deleteCart(item)">
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
  data() {
    return {
      tempProduct: {
        product: {
          title: "",
        },
      },
    };
  },
  methods: {
    showProduct(item) {
      console.log("showProduct", item.product.id);
      // See the callback in the child comp reference
      // in the parent comp
      // this.$emit("askParentToDoStuff", id);
      // console.log("showProduct1");
      this.$emit("showProduct", item.product.id);
      // this.$router.push({ name: "product", params: { id: this.id } });
    },
    deleteCart(item) {
      this.$emit("deleteCart", item);
      // console.log(item);
      // /* global $ */
      // $("#delCartModal").modal("show");
      // this.tempProduct = Object.assign({}, item);
      // console.log(this.tempProduct);
      // console.log(this.tempProduct.product);
      // console.log(this.tempProduct.product.title);
    },
    // delProduct() {
    //   this.isLoading = true;
    //   const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping/${this.item.product.id}`;

    //   this.$http
    //     .delete(url)
    //     .then(() => {
    //       $("#delCartModal").modal("hide");
    //       this.isLoading = false;
    //       this.$emit("updating", false);
    //       this.$emit("updateCart", this.id);
    //     })
    //     .catch((error) => {
    //       $("#delCartModal").modal("hide");
    //       this.isLoading = false;
    //       this.$emit("updating", false);
    //       console.log(error.response);
    //     });
    // },
    quantityUpdata(id, qty) {
      this.$emit("updating", true);
      // 避免商品數量低於 0 個
      if (qty <= 0) return;

      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;

      const data = {
        product: id,
        quantity: qty,
      };

      this.$http
        .patch(url, data)
        .then(() => {
          this.isLoading = false;
          this.$emit("updating", false);
          this.$emit("updateCart");
        })
        .catch((error) => {
          this.isLoading = false;
          this.$emit("updating", false);
          console.log(error.response);
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
  /* width: 100%;
  height: 120px; */
  height: 120px;
}
</style>
