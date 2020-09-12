<template>
  <div id="app">
    <div id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">大大眼鏡</a>
      <ul class="navbar-nav mr-auto">
        <div class="collapse navbar-collapse" id="navbarColor03">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">回首頁</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/products">眼鏡</router-link>
          </li>
          <li v-if="false" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >物料</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  :to="{ name: 'Products', params: { material: '所有物料' }}"
                >所有物料</router-link>
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  :to="{ name: 'Products', params: { material: '樹脂' }}"
                >樹脂</router-link>
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  :to="{ name: 'Products', params: { material: '塑膠' }}"
                >塑膠</router-link>
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  :to="{ name: 'Products', params: { material: '金屬' }}"
                >金屬</router-link>
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  :to="{ path: 'Products', query: { material: '樹脂' }}"
                >樹脂</router-link>
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  :to="{ path: 'Products', query: { material: '塑膠' }}"
                >塑膠</router-link>
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  :to="{ path: 'Products', query: { material: '金屬' }}"
                >金屬</router-link>
              </li>
            </div>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/about">關于我們</router-link>
          </li>
        </div>
      </ul>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/shoppingcart">
              <i class="far fa-heart"></i>
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/shoppingcart">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
//@import "./assets/styles/custom.scss";
//@import "../node_modules/bootstrap/scss/bootstrap.scss";

//@import "bootstrap";

@import "./assets/main";

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
</style>
