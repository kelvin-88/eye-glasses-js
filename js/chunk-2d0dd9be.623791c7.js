(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd9be"],{"81b1":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"products"},[s("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),s("div",{staticClass:"row wrap no-gutters mt-2 mb-2"},[s("div",{staticClass:"col-md-12 col-lg-2"},[s("span",{staticClass:"h3",staticStyle:{"font-weight":"bold"}},[t._v("系列")]),t._l(t.categories,(function(e){return s("div",{key:e,staticClass:"item-category"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCategories,expression:"selectedCategories"}],staticClass:"mt-3",attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.selectedCategories)?t._i(t.selectedCategories,e)>-1:t.selectedCategories},on:{change:function(s){var a=t.selectedCategories,o=s.target,c=!!o.checked;if(Array.isArray(a)){var r=e,i=t._i(a,r);o.checked?i<0&&(t.selectedCategories=a.concat([r])):i>-1&&(t.selectedCategories=a.slice(0,i).concat(a.slice(i+1)))}else t.selectedCategories=c}}}),s("label",{staticClass:"mx-2",attrs:{for:"category"}},[t._v(t._s(e))])])})),s("div",{staticClass:"row mt-5 mr-2 no-gutters"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.priceRange,expression:"priceRange"}],staticClass:"form-control-range products-range",attrs:{min:"1",max:"10000",type:"range"},domProps:{value:t.priceRange},on:{change:t.filterProducts,__r:function(e){t.priceRange=e.target.value}}}),s("span",{staticClass:"h5"},[t._v("$"+t._s(t._f("toThousandSeperator")(t.priceRange)))])])],2),s("div",{staticClass:"col-md-12 col-lg-10"},[s("div",{staticClass:"row no-gutters"},t._l(t.tempProducts,(function(e){return s("div",{key:e.id,staticClass:"col-lg-4 col-sm-6 p-2 products"},[s("Product",{attrs:{product:e,url:e.imageUrl[0]},on:{showProduct:t.showProduct,click:function(s){return t.getProduct(e)}}})],1)})),0)])])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"h5",attrs:{for:"price-range"}},[s("span",{staticClass:"h3 mr-3",staticStyle:{"font-weight":"bold"}},[t._v("格價")]),t._v(" $1 - $10,000")])}],c=(s("99af"),s("caad"),s("2532"),s("b85c")),r=s("c1ac"),i={components:{Product:r["a"]},created:function(){console.log(this.$route.params),console.log(this.$route.query),this.getProducts(1)},data:function(){return{priceRange:1e4,isLoading:!1,title:"",products:[],tempProducts:[],tempProduct:{imageUrl:[]},tempIndex:0,user:{token:"",uuid:""},pages:{current_page:1,total_pages:0},categories:["經典系列","春夏眼鏡系列","行政眼鏡系列"],selectedCategories:[],includeCategories:[]}},watch:{selectedCategories:{handler:function(){console.log(this.selectedCategories),this.filterProducts()}}},methods:{setFavorites:function(t){var e=JSON.parse(localStorage.getItem("favorite"));console.log("setFavorites",e),null===e&&(e=[]);var s,a={},o=Object(c["a"])(t);try{for(o.s();!(s=o.n()).done;)a=s.value,e.includes(a.id)?a.favorite=!0:a.favorite=!1}catch(r){o.e(r)}finally{o.f()}console.log("setFavorites",t)},filterProducts:function(){var t;this.tempProducts=[],0===this.selectedCategories.length?this.includeCategories=this.categories:this.includeCategories=this.selectedCategories;var e,s=Object(c["a"])(this.products);try{for(s.s();!(e=s.n()).done;)t=e.value,console.log(t),this.includeCategories.includes(t.title)&&t.price<=this.priceRange&&this.tempProducts.push(t)}catch(a){s.e(a)}finally{s.f()}},showProduct:function(t){console.log("showProduct received: ",t),this.$router.push({path:"/product/".concat(t)})},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/products?page=").concat(e);this.$http.get(s).then((function(e){t.isLoading=!1,console.log(e.data.data),t.products=e.data.data,t.pages.current_page=e.data.meta.pagination.current_page,t.pages.total_pages=e.data.meta.pagination.total_pages,console.log(t.products),t.tempProducts=t.products,t.setFavorites(t.tempProducts)})).catch((function(e){t.isLoading=!1,console.log(e.response)}))},getProduct:function(t){console.log(t.id),this.$router.push({name:"product",params:{id:t.id}})}}},n=i,l=s("2877"),d=Object(l["a"])(n,a,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0dd9be.623791c7.js.map