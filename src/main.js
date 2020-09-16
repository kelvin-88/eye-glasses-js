import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

// loading
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

// toast message
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

// bootstrap
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';

// validate
import { ValidationProvider, ValidationObserver, extend, configure, localize } from 'vee-validate';
// import { required, email } from 'vee-validate/dist/rules';
import * as rules from "vee-validate/dist/rules";
import tw from "vee-validate/dist/locale/zh_TW.json";

// No message specified.
// extend('email', email);

// Override the default message.
// extend('required', {
//   ...required,
//   message: 'This field is required',
// });

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

// import { required } from 'vee-validate/dist/rules';

// extend("secret", {
//   validate: (value) => value === "example",
//   message: "This is not the magic word",
// });

// Class 設定檔案
configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
  },
});

// 加入至 VeeValidate 的設定檔案
localize("zh_TW", tw);

// Register the component globally.
Vue.component("ValidationObserver", ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

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
