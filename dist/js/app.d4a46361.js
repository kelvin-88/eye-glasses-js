(function(t){function a(a){for(var s,r,i=a[0],c=a[1],u=a[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(a);while(d.length)d.shift()();return n.push.apply(n,u||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,r=1;r<e.length;r++){var i=e[r];0!==o[i]&&(s=!1)}s&&(n.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},r={app:0},o={app:0},n=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0afdf8":"ab683a9c","chunk-2d0be179":"3db25d95","chunk-55d78d3e":"8f4e6578","chunk-2d0c8429":"d1a19f8d","chunk-2d0dd9be":"3c14b77a","chunk-c50d3abe":"e8dffb0b"}[t]+".js"}function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var a=[],e={"chunk-55d78d3e":1,"chunk-c50d3abe":1};r[t]?a.push(r[t]):0!==r[t]&&e[t]&&a.push(r[t]=new Promise((function(a,e){for(var s="css/"+({}[t]||t)+"."+{"chunk-2d0afdf8":"31d6cfe0","chunk-2d0be179":"31d6cfe0","chunk-55d78d3e":"e76b3c21","chunk-2d0c8429":"31d6cfe0","chunk-2d0dd9be":"31d6cfe0","chunk-c50d3abe":"f4159481"}[t]+".css",o=c.p+s,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var u=n[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===o))return a()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===s||l===o)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var s=a&&a.target&&a.target.src||o,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete r[t],f.parentNode.removeChild(f),e(n)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var s=o[t];if(0!==s)if(s)a.push(s[2]);else{var n=new Promise((function(a,e){s=o[t]=[a,e]}));a.push(s[2]=n);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(a){l.onerror=l.onload=null,clearTimeout(f);var e=o[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",d.name="ChunkLoadError",d.type=s,d.request=r,e[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(a)},c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/eye-glasses-js/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=a,u=u.slice();for(var d=0;d<u.length;d++)a(u[d]);var f=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("4de4"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"navbar navbar-expand-lg navbar-light bg-light",attrs:{id:"nav"}},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("大大眼鏡")]),e("ul",{staticClass:"navbar-nav mr-auto"},[e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor03"}},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("回首頁")])],1),e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/products"}},[t._v("眼鏡")])],1),t._e(),e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("關于我們")])],1)])]),e("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/favorites"}},[e("i",{staticClass:"far fa-heart"})])],1),e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[e("i",{staticClass:"fas fa-shopping-cart"},[t._v("("+t._s(t.cartItems)+")")])])],1)])])]),e("router-view"),t._m(0)],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("span",{staticClass:"text-muted"},[t._v("©2020 大大眼鏡")]),e("p")])])}],n=(e("99af"),e("4160"),e("159b"),{data:function(){return{cartItems:0,cartTotal:0,isLoading:!1}},created:function(){var t=this;this.updateCart(),this.$bus.$on("update-cart",(function(){t.updateCart()})),this.$bus.$on("show-toast-message",(function(a){t.$toast(a,{timeout:3e3,hideProgressBar:!0})})),this.$bus.$on("show-toast-error",(function(a){t.$toast.error(a,{timeout:3e3,hideProgressBar:!0})}))},methods:{updateCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/shopping");console.log(a),this.$http.get(a).then((function(a){var e=a.data.data;console.log("updateCart",e),t.cartItems=0,t.cartTotal=0,e.forEach((function(a){t.cartItems+=a.quantity,t.cartTotal+=a.product.price*a.quantity})),t.isLoading=!1})).catch((function(a){t.isLoading=!1,console.log(a.response)}))}}}),i=n,c=(e("5c0b"),e("2877")),u=Object(c["a"])(i,r,o,!1,null,null,null),l=u.exports,d=e("8c4f"),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container marketing"},[t._m(0),t._m(1),e("HotProduct")],1)},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row featurette mt-4"},[e("div",{staticClass:"col-md-7"},[e("h2",{staticClass:"featurette-heading"},[t._v(" 簡約設計 "),e("span",{staticClass:"text-muted"},[t._v("眼鏡工藝")])]),e("p",{staticClass:"lead"},[t._v("深信經過努力, 加上尖端的科技, 破傳統精益求精. 工藝不遺餘力")])]),e("div",{staticClass:"col-md-5"},[e("img",{staticClass:"featurette-image img-fluid mx-auto",attrs:{"data-src":"holder.js/500x500/auto",src:"https://images.unsplash.com/photo-1574422282888-4c30455ccdcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",alt:"Generic placeholder image"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row featurette mt-4"},[e("div",{staticClass:"col-md-5"},[e("img",{staticClass:"featurette-image img-fluid mx-auto",attrs:{"data-src":"holder.js/500x500/auto",src:"https://images.unsplash.com/photo-1486125305436-b7144b0734f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",alt:"Generic placeholder image"}})]),e("div",{staticClass:"col-md-7"},[e("h2",{staticClass:"featurette-heading"},[t._v(" 尖端科技 "),e("span",{staticClass:"text-muted"},[t._v("人體工學")])]),e("p",{staticClass:"lead"},[t._v("緊貼面型, 輕巧, 舒適, 堅固，耐用")])])])}],h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h2",{staticClass:"mt-4",staticStyle:{"text-align":"center!important"}},[t._v("暢銷眼鏡")]),e("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[e("div",{staticClass:"carousel-inner"},t._l(t.tempProducts,(function(a){return e("div",{key:a.id,class:{"carousel-item":!0,active:t.firstTempProduct==a}},[e("Product",{attrs:{product:a,showShoppingCart:!1,url:a.imageUrl[0]},on:{showProduct:t.showProduct}})],1)})),0),t._m(0),t._m(1)])])},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Next")])])}],m=e("e427"),g={components:{Product:m["a"]},name:"HotProduct",created:function(){this.getProducts()},data:function(){return{tempProducts:[],firstTempProduct:{},pages:{current_page:1,total_pages:0}}},methods:{showProduct:function(t){console.log("showProduct received: ",t),this.$router.push({path:"/product/".concat(t)})},getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/products?page=").concat(a);this.$http.get(e).then((function(a){t.isLoading=!1,console.log(a.data.data),t.products=a.data.data,t.pages.current_page=a.data.meta.pagination.current_page,t.pages.total_pages=a.data.meta.pagination.total_pages,t.tempProducts=t.products,console.log("tempProducts",t.tempProducts),t.firstTempProduct={},t.tempProducts.length>0&&(t.firstTempProduct=t.tempProducts[0]),console.log("firstProduct",t.firstTempProduct);var e=0;for(e=0;e<t.tempProducts.length;e++)t.tempProducts[e].class=0===e?"carousel-item active":"carousel-item"})).catch((function(a){t.isLoading=!1,console.log(a.response)}))}}},b=g,C=(e("7245"),Object(c["a"])(b,h,v,!1,null,"4e01323a",null)),_=C.exports,k={components:{HotProduct:_},name:"Home"},P=k,y=Object(c["a"])(P,f,p,!1,null,null,null),w=y.exports;s["a"].use(d["a"]);var x=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return e.e("chunk-2d0be179").then(e.bind(null,"2f7f"))}},{path:"/products",name:"Products",component:function(){return Promise.all([e.e("chunk-55d78d3e"),e.e("chunk-2d0dd9be")]).then(e.bind(null,"81b1"))}},{path:"/product/:id",name:"Product",component:function(){return e.e("chunk-2d0afdf8").then(e.bind(null,"0fd0"))}},{path:"/cart",name:"Cart",component:function(){return e.e("chunk-c50d3abe").then(e.bind(null,"2355"))}},{path:"/favorites",name:"Favorites",component:function(){return Promise.all([e.e("chunk-55d78d3e"),e.e("chunk-2d0c8429")]).then(e.bind(null,"53b7"))}}],$=new d["a"]({routes:x}),S=$,T=e("bc3a"),E=e.n(T),O=e("a7fe"),L=e.n(O),j=e("9062"),N=e.n(j),B=(e("e40d"),e("6c42")),H=(e("da96"),e("4989"),e("1157")),I=e.n(H);s["a"].config.productionTip=!1,s["a"].use(L.a,E.a),s["a"].component("Loading",N.a);var M={transition:"Vue-Toastification__fade",maxToasts:5,newestOnTop:!0};s["a"].use(B["a"],M),s["a"].prototype.$bus=new s["a"],window.$=I.a,s["a"].filter("toThousandSeperator",(function(t){var a=Math.round(100*t)/100;return a.toString().replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g,",")})),new s["a"]({router:S,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),r=e.n(s);r.a},7245:function(t,a,e){"use strict";var s=e("d1a1"),r=e.n(s);r.a},"989f":function(t,a,e){},"9c0c":function(t,a,e){},c568:function(t,a,e){"use strict";var s=e("989f"),r=e.n(s);r.a},d1a1:function(t,a,e){},e427:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card",on:{click:t.showProduct}},[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t.product.title?e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7"},[e("img",{staticClass:"card-img-detail",attrs:{src:t.product.imageUrl[0]}}),e("div",{staticClass:"card-img-overlay d-flex justify-content-end"},[e("a",{staticClass:"card-link text-danger like",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updateFavorite(t.product)}}},[t.favorite?e("div",[e("i",{staticClass:"fas fa-heart"})]):e("div",[e("i",{staticClass:"far fa-heart"})])])])]),e("div",{staticClass:"col-lg-5 mt-4"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.product.title))]),e("p"),e("p",{staticClass:"card-text text-muted"},[t._v(t._s(t.product.content))]),e("p",{staticClass:"card-subtitle mt-2",domProps:{innerHTML:t._s(t.product.description)}}),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-lg-7 mt-2"},[e("div",{staticClass:"row"},[e("span",{staticClass:"ml-3 price mr-4"},[t._v("$"+t._s(t._f("toThousandSeperator")(t.product.price)))]),e("span",{staticClass:"original-price mt-1"},[t._v("$"+t._s(t._f("toThousandSeperator")(t.product.origin_price)))])])]),t.showShoppingCart?e("div",{staticClass:"col-lg-5 mt-2 align-items-end"},[e("a",{staticClass:"btn btn-danger",on:{click:t.addToCart}},[e("i",{staticClass:"fas fa-shopping-cart"}),t._v(" 加入購物車 ")])]):t._e()])])]):t._e()],1)},r=[],o=(e("99af"),e("caad"),e("c975"),e("a434"),e("2532"),{props:{product:{favorite:!1},showShoppingCart:Boolean},created:function(){this.refreshFavorite()},mounted:function(){},updated:function(){this.refreshFavorite()},data:function(){return{isLoading:!1,favorites:[],favorite:!1}},methods:{refreshFavorite:function(){this.favorites=JSON.parse(localStorage.getItem("favorite")),null===this.favorites&&(this.favorites=[]),this.favorites.includes(this.product.id)?this.favorite=!0:this.favorite=!1},updateFavorite:function(t){this.showShoppingCart&&(this.favorites=JSON.parse(localStorage.getItem("favorite")),null===this.favorites&&(this.favorites=[]),console.log("favorites",this.favorites),this.favorite?this.favorites.includes(t.id)&&(this.favorites.splice(this.favorites.indexOf("B"),1),localStorage.setItem("favorite",JSON.stringify(this.favorites))):this.favorites.includes(t.id)||(this.favorites.push(t.id),localStorage.setItem("favorite",JSON.stringify(this.favorites))),this.refreshFavorite())},showProduct:function(){this.$emit("showProduct",this.product.id)},addToCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/shopping"),e={product:this.product.id,quantity:"1"};this.$http.post(a,e).then((function(a){t.isLoading=!1,console.log(a.data.data),t.$bus.$emit("show-toast-message","成功加入購物車"),t.$bus.$emit("update-cart",(function(){}))})).catch((function(a){t.isLoading=!1,console.log(a.response),console.log(a.response.data.errors[0]),t.$bus.$emit("show-toast-error",a.response.data.errors[0]),t.$bus.$emit("update-cart",(function(){}))}))}}}),n=o,i=(e("c568"),e("2877")),c=Object(i["a"])(n,s,r,!1,null,"0e564d58",null);a["a"]=c.exports}});
//# sourceMappingURL=app.d4a46361.js.map