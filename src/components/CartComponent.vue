<template>
  <div>
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
            <button @click="deleteCart(item)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </div>
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
  width: 100%;
  height: 120px;
}
</style>
