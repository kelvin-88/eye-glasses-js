<template>
  <div>
    <h2>後台管理頁面</h2>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/admin">後台管理頁面</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupons"
              >優待券列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders"
              >訂單列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/images"
              >圖片儲存列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">回前台</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/logout">登出</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view :token="token" v-if="checkSuccess" />
  </div>
</template>
<script>
export default {
  created() {
    console.log(process.env.VUE_APP_UUID);
    this.checkLogin();
  },
  data() {
    return { token: "", checkSuccess: false };
  },

  methods: {
    checkLogin() {
      const api = `${process.env.VUE_APP_APIPATH}api/auth/check`;

      // this.token = document.*/.replace(
      //   /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      //   '$1'
      // );
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); // 这里显示的格式需要切割一下自己可,输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); // 再次切割
          // 判断查找相对应的值
          if (arr2[0] === "hexToken") {
            this.token = arr2[1]; // 保存到保存数据的地方
          }
        }
      }

      /*
      this.$http.defaults.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.token}`
      };
      */
      const data = {
        api_token: this.token,
      };
      this.$http
        .post(api, data)
        .then((response) => {
          console.log(response.data);
          this.checkSuccess = true;
          /*
          this.$http.defaults.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`
          };
          */
          this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
        })
        .catch((error) => {
          console.log(error);
          this.$router.push("/login");
        });
    },
  },
};
</script>
