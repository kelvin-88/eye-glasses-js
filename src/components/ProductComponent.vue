<template>
  <div class="card">
    <Loading :active.sync="isLoading"></Loading>
    <div class="row">
      <div class="col-lg-7">
        <img class=".card-img-detail img-fluid" :src="url" alt="Vans" />
        <div class="card-img-overlay d-flex justify-content-end">
          <a href="#" class="card-link text-danger like">
            <i class="fas fa-heart"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-5 d-flex flex-column">
        <h4 class="card-title">{{ title }}</h4>
        <h6 class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
        <p class="card-text">{{ content }}</p>

        <div class="buy d-flex justify-content-between align-items-center card-footer">
          <p class="card-text">{{ description }}</p>
        </div>
        <td class="row mt-auto p-2 align-self-end">
          <h5>
            <span class="mt-4 original-price">{{origin_price}}</span>
            <span class="mt-4">{{price}}</span>
          </h5>
          <a @click="addToCart" class="btn btn-danger mt-3">
            <i class="fas fa-shopping-cart"></i> 加入購物車
          </a>
        </td>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    content: String,
    description: String,
    origin_price: Number,
    price: Number,
    url: String,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    addToCart() {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const data = {
        product: this.id,
        quantity: "1",
      };
      this.$http
        .post(api, data)
        .then((response) => {
          this.isLoading = false;
          // console.log(response);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },
  },
};
</script>
<style>
.card {
  margin-top: 0rem;
}

.card-img-detail {
  width: 100%;
  height: 417px;
}

.original-price {
  text-decoration: line-through;
  padding: 10px;
}

.price {
  color: #ff0000;
}
</style>
