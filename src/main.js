import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.component("Loading", Loading);

const options = {
  // You can set your default options here
  transition: "Vue-Toastification__fade",
  maxToasts: 5,
  newestOnTop: true,
};
Vue.use(Toast, options);

// event bus
Vue.prototype.$bus = new Vue();

window.$ = $;

Vue.filter('toThousandSeperator', function (value) {
  const rounded = Math.round(value * 100) / 100;
  return rounded
    .toString()
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
