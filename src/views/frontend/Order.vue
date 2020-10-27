<template>
  <div class="content">
    <div class="container-fluid">
      <div class="col-12 col-md-12 col-lg-10 mx-auto">
        <Loading :active.sync="isLoading"></Loading>
        <div class="mx-0" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="exampleModalLabel" class="modal-title">
                <span>訂單細節</span>
              </h5>
            </div>
            <ValidationObserver v-slot="{ invalid }">
              <!-- 表單送出改為使用 form submit 的方法 -->
              <form @submit.prevent="submitForm">
                <div class="modal-body">
                  <div class="row">
                    <div class="col-12 col-md-12 col-lg-8">
                      <div class="form-group">
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors, classes }"
                        >
                          <label for="name">名稱</label>
                          <input
                            id="name"
                            v-model="tempOrder.name"
                            type="text"
                            class="form-control"
                            :class="classes"
                            placeholder="請輸入名稱"
                          />
                          <span class="invalid-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>

                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <ValidationProvider
                            rules="required|email"
                            v-slot="{ errors, classes }"
                          >
                            <label for="email">電子信箱</label>
                            <input
                              id="email"
                              v-model="tempOrder.email"
                              type="email"
                              class="form-control"
                              :class="classes"
                              placeholder="請輸入電子信箱"
                            />
                            <span class="invalid-feedback">{{
                              errors[0]
                            }}</span>
                          </ValidationProvider>
                        </div>
                        <div class="form-group col-md-6">
                          <validation-provider
                            rules="required|min:8"
                            v-slot="{ errors, classes }"
                          >
                            <label for="tel">電話</label>
                            <input
                              id="tel"
                              v-model="tempOrder.tel"
                              type="tel"
                              class="form-control"
                              :class="classes"
                              placeholder="請輸入電話"
                            />
                            <span class="invalid-feedback">{{
                              errors[0]
                            }}</span>
                          </validation-provider>
                        </div>
                      </div>

                      <div class="form-group">
                        <validation-provider
                          rules="required"
                          v-slot="{ errors, classes }"
                        >
                          <label for="address">運送地址</label>
                          <textarea
                            id="address"
                            v-model="tempOrder.address"
                            type="text"
                            class="form-control"
                            :class="classes"
                            placeholder="請輸入運送地址"
                          ></textarea>
                          <span class="invalid-feedback">{{ errors[0] }}</span>
                        </validation-provider>
                      </div>

                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <validation-provider rules="required">
                            <label for="payment">購買方式</label>
                            <select
                              class="form-control"
                              id="payment"
                              v-model="tempOrder.payment"
                            >
                              <option disabled value>請選擇付款方式</option>
                              <option>WebATM</option>
                              <option>Barcode</option>
                              <option>Credit</option>
                              <option>ApplePay</option>
                              <option>GooglePay</option>
                            </select>
                          </validation-provider>
                        </div>
                        <!--div class="form-group col-md-6">
                        <label for="coupon">優惠券</label>
                        <input
                          readonly
                          id="coupon"
                          v-model="tempOrder.coupon"
                          type="text"
                          class="form-control"
                          placeholder="請輸入優惠券"
                        />
                      </div-->
                      </div>

                      <div class="form-group">
                        <label for="message">備註</label>
                        <textarea
                          id="description"
                          v-model="tempOrder.message"
                          type="text"
                          class="form-control"
                          placeholder="請輸入備註"
                        ></textarea>
                      </div>

                      <div class="form-row mt-4">
                        <div class="form-group col-6 col-md-6">
                          <button
                            type="submit"
                            class="btn btn-primary btn-lg"
                            :disabled="invalid"
                          >
                            確認付款
                          </button>
                        </div>
                        <div class="form-group col-6 col-md-6 text-right">
                          <button
                            type="button"
                            class="btn btn-outline-primary btn-lg"
                            @click.prevent="$router.push('Cart')"
                          >
                            回到購物車
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-4">
                      <!--tr v-for="(item, index) in products" :key="item.id"-->
                      <div
                        class="row mt-2"
                        v-for="item in items"
                        :key="item.id"
                      >
                        <div class="col-12 col-md-8 col-lg-4">
                          <img
                            :src="item.product.imageUrl[0]"
                            class="img-fluid"
                          />
                        </div>
                        <div
                          class="col-12 col-md-10 col-lg-8"
                          style="font-size: 10px"
                        >
                          <div class="form-group row">
                            <div class="col-12 h5">
                              {{ item.product.title }}
                            </div>
                            <div class="col-12 h5 text-muted">
                              {{ item.product.content }}
                            </div>
                            <div class="col-12 h5 text-right">
                              {{ item.quantity }} x ${{
                                item.product.price | toThousandSeperator
                              }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <hr
                          style="width: 100%; text-align: left; margin-left: 0"
                        />
                      </div>
                      <div class="row">
                        <h5 class="col-6 col-md-6">總計</h5>
                        <div class="col-6 col-md-6 text-right h5">
                          ${{ totalAmount | toThousandSeperator }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getShoppingCart();
  },
  methods: {
    submitForm() {
      console.log("submitForm", this.tempOrder);
      this.isLoading = true;

      // let api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/ec/products?page=${page}`;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/orders`;

      this.$http
        .post(url, this.tempOrder)
        .then((response) => {
          this.isLoading = false;
          // console.log(response);
          console.log(response.data.data);
          // this.products = JSON.parse(JSON.stringify(response.data.data));
          const data = response.data;
          console.log("data", data);
          this.$bus.$emit("show-toast-message", "訂單創建成功");
          this.$bus.$emit("update-cart", () => {});
          this.$router.push("/products");
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
          this.$bus.$emit("show-toast-error", error.response.data.errors[0]);
          this.$bus.$emit("update-cart", () => {});
        });
    },
    getShoppingCart(page = 1) {
      this.isLoading = true;

      // let api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/ec/products?page=${page}`;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping?page=${page}`;

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
  },
  data() {
    return {
      isLoading: false,
      tempOrder: {},
      items: [],
      pages: { current_page: 1, total_pages: 0 },
      totalAmount: 0,
    };
  },
};
</script>

<style scoped>
.item-img {
  width: 100%;
  height: 120px;
}
</style>
