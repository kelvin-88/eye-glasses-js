(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afdf8"],{"0fd0":function(t,o,a){"use strict";a.r(o);var c=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"content"},[a("div",{staticClass:"wrap"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(o){t.isLoading=o}}}),a("div",{staticClass:"product"},[a("Product",{attrs:{product:t.product,showShoppingCart:!0}})],1)],1)])},n=[],i=(a("99af"),a("e427")),s={components:{Product:i["a"]},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;this.isLoading=!0;var o="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/product/").concat(this.$route.params.id);this.$http.get(o).then((function(o){t.isLoading=!1,console.log(o.data.data),t.product=o.data.data,t.product&&t.product.imageUrl&&(t.url=t.product.imageUrl[0]),console.log(t.product)})).catch((function(o){t.isLoading=!1,console.log(o)}))}},data:function(){return{isLoading:!1,product:{},url:",",favorites:[]}}},d=s,r=a("2877"),e=Object(r["a"])(d,c,n,!1,null,null,null);o["default"]=e.exports}}]);
//# sourceMappingURL=chunk-2d0afdf8.01edf641.js.map