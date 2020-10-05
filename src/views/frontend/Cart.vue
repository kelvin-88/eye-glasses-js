<template>
  <div class="container-fluid">
    <div class="col-10 mx-auto">
      <Loading :active.sync="isLoading"></Loading>
      <div class="h4"><strong>購物車</strong></div>
      <hr />
      <div v-if="items.length > 0">
        <div class="row">
          <div
            class="col-lg-12 mt-3"
            v-for="item in items"
            v-bind:key="item.id"
          >
            <Cart
              @updateCart="updateCart"
              @updating="updating"
              @showProduct="showProduct"
              @deleteCart="deleteCart"
              :item="item"
            />
          </div>
        </div>
        <div class="row">
          <hr style="width: 100%; text-align: left; margin-left: 0" />
        </div>
        <div class="d-flex flex-row justify-content-end w-100">
          <button
            type="submit"
            class="btn btn-primary btn-lg px-4"
            @click.prevent="$router.push('Order')"
          >
            確認訂單
          </button>
          <h4 class="p-2">總計 ${{ totalAmount | toThousandSeperator }}</h4>
        </div>
      </div>
      <div v-else><h4 class="mt-4">您的購物車尚未加入任何商品</h4></div>

      <div
        id="delCartModal"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="exampleModalLabel" class="modal-title">
                <span>刪除產品</span>
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{
                tempProduct.product.title
              }}</strong>
              商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                取消
              </button>
              <button type="button" class="btn btn-danger" @click="delProduct">
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from "@/components/frontend/CartComponent.vue";

export default {
  /* global $ */
  components: {
    Cart,
  },
  created() {
    this.getShoppingCart(1);
    this.getProducts(1);
  },
  data() {
    return {
      isLoading: false,
      title: "",
      items: [],
      tempProduct: {
        product: {
          title: "",
        },
      },
      tempProducts: [],
      firstTempProduct: {},
      tempIndex: 0,
      user: {
        token: "",
        uuid: "",
      },
      totalAmount: 0,
      pages: { current_page: 1, total_pages: 0 },
    };
  },
  methods: {
    showProduct(id) {
      console.log("showProduct received: ", id);
      // logs: received: 'foo'
      // this.$router.push({ name: "Product", params: { id: id } });
      this.$router.push({ path: `/product/${id}` });
    },

    delProduct() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping/${this.tempProduct.product.id}`;

      this.$http
        .delete(url)
        .then(() => {
          $("#delCartModal").modal("hide");
          this.isLoading = false;
          this.getShoppingCart(1);
          this.$bus.$emit("update-cart", () => {});
        })
        .catch((error) => {
          $("#delCartModal").modal("hide");
          this.isLoading = false;
          console.log(error.response);
        });
    },

    deleteCart(item) {
      console.log("deleteCart", item);
      $("#delCartModal").modal("show");
      this.tempProduct = Object.assign({}, item);
    },
    updating(status) {
      this.isLoading = status;
    },
    updateCart(id) {
      this.getShoppingCart(1);
    },
    getShoppingCart(page = 1) {
      this.$bus.$emit("update-cart", () => {});
      this.isLoading = true;

      // let api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/ec/products?page=${page}`;
      let api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping?page=${page}`;
      //
      api = `${process.env.VUE_APP_APIPATH}api/6b69171f-d486-488a-beaf-ee85eb21fa24/ec/shopping?page=${page}`;
      this.$http
        .get(api)
        .then((response) => {
          this.isLoading = false;
          // console.log(response);
          console.log(response.data.data);
          // this.products = JSON.parse(JSON.stringify(response.data.data));
          this.items = response.data.data;

          this.pages.current_page = response.data.meta.pagination.current_page;
          this.pages.total_pages = response.data.meta.pagination.total_pages;
          // this.pages.total_pages = 5;

          // this.pages.current_page = 2;
          // this.pages.total_pages = 5;

          console.log(this.items);

          this.totalAmount = 0;
          let item;
          for (item of this.items) {
            this.totalAmount += item.quantity * item.product.price;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
        });
    },
    getProducts(page = 1) {
      this.isLoading = true;

      // let api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/ec/products?page=${page}`;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`;

      this.$http
        .get(url)
        .then((response) => {
          this.isLoading = false;
          // console.log(response);
          console.log(response.data.data);
          // this.products = JSON.parse(JSON.stringify(response.data.data));
          this.products = response.data.data;

          this.pages.current_page = response.data.meta.pagination.current_page;
          this.pages.total_pages = response.data.meta.pagination.total_pages;
          // this.pages.total_pages = 5;

          // this.pages.current_page = 2;
          // this.pages.total_pages = 5;

          this.tempProducts = this.products;
          console.log("tempProducts", this.tempProducts);
          this.firstTempProduct = {};
          if (this.tempProducts.length > 0) {
            this.firstTempProduct = this.tempProducts[0];
          }
          let i = 0;
          for (i = 0; i < this.tempProducts.length; i++) {
            if (i === 0) {
              this.tempProducts[i].class = "carousel-item active";
            } else {
              this.tempProducts[i].class = "carousel-item";
            }
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
        });
    },
  },
};
</script>

<style scoped>
.carousel-inner {
  height: 300px;
}

.carousel .carousel-item {
  height: 300px;
}

.carousel .carousel-item img {
  min-height: 300px;
  max-height: 400px;
  object-fit: cover;
}

.carousel-control-next,
.carousel-control-prev {
  filter: invert(100%);
}
</style>
