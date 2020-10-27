import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/frontend/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Home",
    component: Home,
  },
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

  {
    path: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/logout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logout.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/Orders.vue'),
      },
      {
        path: 'images',
        component: () => import('../views/dashboard/Images.vue'),
      },
      {
        path: 'upload',
        component: () => import('../views/dashboard/Upload.vue'),
      },
    ],
  },

];

const router = new VueRouter({
  routes,
});

export default router;
