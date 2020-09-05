<template>
  <div class="card">
    <div class="row">
      <div class="col-lg-7">
        <img class=".card-img-detail img-fluid" :src="url" alt="Vans" />
        <div class="card-img-overlay d-flex justify-content-end">
          <a href="#" class="card-link text-danger like">
            <i class="fas fa-heart"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-5">
        <h4 class="card-title">{{ title }}</h4>
        <h6 class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
        <p class="card-text">{{ content }}</p>

        <div class="buy d-flex justify-content-between align-items-center card-footer">
          <span>
            <span>
              <h5 class="mt-4 line-through">{{origin_price}}</h5>
            </span>
            <span>
              <h5 class="mt-4 price">{{price}}</h5>
            </span>
          </span>
          <a href="#" class="btn btn-danger mt-3 align-self-end">
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
    title: String,
    content: String,
    description: String,
    origin_price: Number,
    price: Number,
    url: String,
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

.line-through {
  text-decoration: line-through;
}

.price {
  color: #ff0000;
}
</style>
