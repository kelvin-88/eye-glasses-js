<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>

    <div id="nav" class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">大大眼鏡</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myNavbar,#myNavbarEnd"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">眼鏡</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">關于我們</router-link>
          </li>
        </ul>
      </div>
      <div
        class="collapse navbar-collapse justify-content-end navbar-icons-width"
        id="myNavbarEnd"
      >
        <ul class="navbar-nav mx-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/favorites">
              <i class="far fa-heart"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              <i class="fas fa-shopping-cart">({{ cartItems }})</i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <router-view />
    <footer class="footer">
      <div class="container">
        <span class="text-muted">&copy;2020 大大眼鏡</span>
        <p></p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartItems: 0,
      cartTotal: 0,
      isLoading: false,
    };
  },
  created() {
    this.updateCart();
    this.$bus.$on("update-cart", () => {
      this.updateCart();
    });
    this.$bus.$on("show-toast-message", (msg) => {
      this.$toast(msg, {
        timeout: 3000,
        hideProgressBar: true,
      });
    });
    this.$bus.$on("show-toast-error", (msg) => {
      this.$toast.error(msg, {
        timeout: 3000,
        hideProgressBar: true,
      });
    });
  },
  methods: {
    updateCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      console.log(url);

      this.$http
        .get(url)
        .then((response) => {
          const items = response.data.data;
          console.log("updateCart", items);
          this.cartItems = 0;
          this.cartTotal = 0;
          items.forEach((item) => {
            this.cartItems += item.quantity;
            this.cartTotal += item.product.price * item.quantity;
          });
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
        });
    },
  },
};
</script>
<style lang="scss">
//@import "./assets/styles/custom.scss";
//@import "../node_modules/bootstrap/scss/bootstrap.scss";

//@import "bootstrap";

@import "./assets/main";
@import url("https://fonts.googleapis.com/css?family=Proza+Libre");
@import url("https://fonts.googleapis.com/css2?family=Tangerine&display=swap");

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
.navbar-brand {
  font-family: "Proza Libre", sans-serif;
  color: seagreen;
  font-weight: 800;
  font-size: 200%;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: gray;
  text-align: center;
}
</style>
