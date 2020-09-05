<template>
  <div class="card">
    <img class="card-img img-fluid" :src="url" alt="Vans" />
    <div class="card-img-overlay d-flex justify-content-end">
      <a href="#" class="card-link text-danger like">
        <i class="fas fa-heart"></i>
      </a>
    </div>
    <div class="card-body">
      <h4 class="card-title">{{ title }}</h4>
      <h6 class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
      <p class="card-text">
        {{ content }}
      </p>
      <div class="options d-flex flex-fill">
        <select class="custom-select mr-1">
          <option selected>Color</option>
          <option value="1">Green</option>
          <option value="2">Blue</option>
          <option value="3">Red</option>
        </select>
        <select class="custom-select ml-1">
          <option selected>Size</option>
          <option value="1">41</option>
          <option value="2">42</option>
          <option value="3">43</option>
        </select>
      </div>
      <div class="buy d-flex justify-content-between align-items-center">
        <div class="price text-success">
          <h5 class="mt-4">$125</h5>
        </div>
        <a href="#" class="btn btn-danger mt-3">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    url: String
  }
};
</script>

<style>
.card {
  margin-top: 0rem;
}

.card-img {
  width: 100%;
  height: 230px;
}
</style>
