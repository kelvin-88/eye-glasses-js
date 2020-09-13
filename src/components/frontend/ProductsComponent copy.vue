<template>
  <div class="container" style="outline: 1px">
    <div class="row">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4">
        <div class="card">
          <img class="card-img" :src="url" />
          <div class="card-img-overlay d-flex justify-content-end">
            <a href="#" class="card-link text-danger like">
              <i class="fas fa-heart"></i>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <h6 class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
            <p class="card-text">
              The Vans All-Weather MTE Collection features footwear and apparel
              designed to withstand the elements whilst still looking cool.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    url: String
  }
};
</s,crip,t>
