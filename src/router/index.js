import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/frontend/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/frontend/Products.vue"),
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("../views/frontend/Product.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/frontend/Cart.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the r,oute, is visited.
  //   component: () =>
  //     impo, rt(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
