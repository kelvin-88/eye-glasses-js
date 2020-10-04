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
    path: "/about",
    name: "About",
    component: () => import("../views/frontend/About.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/frontend/Products.vue"),
  },
  {
    path: "/lens",
    name: "Lens",
    component: () => import("../views/frontend/Lens.vue"),
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
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/frontend/Order.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("../views/frontend/Favorites.vue"),
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
