(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e768fe4"],{"057f":function(t,e,n){var i=n("fc6a"),o=n("241c").f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==r.call(t)?c(t):o(i(t))}},2355:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"col-10 mx-auto"},[n("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),n("hr"),t.items.length>0?n("div",[n("div",{staticClass:"row"},t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"col-lg-12 mt-3"},[n("Cart",{attrs:{item:e},on:{updateCart:t.updateCart,updating:t.updating,showProduct:t.showProduct,deleteCart:t.deleteCart}})],1)})),0),t._m(1),n("div",{staticClass:"d-flex flex-row justify-content-end w-100"},[n("button",{staticClass:"btn btn-primary btn-lg px-4 mr-2",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.$router.push("Order")}}},[t._v(" 確認訂單 ")]),n("h4",{staticClass:"p-2"},[t._v("總計 $"+t._s(t._f("toThousandSeperator")(t.totalAmount)))])])]):n("div",[n("h4",{staticClass:"mt-4"},[t._v("您的購物車尚未加入任何商品")])]),n("div",{staticClass:"modal fade",attrs:{id:"delCartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content border-0"},[t._m(2),n("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),n("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.product.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delProduct}},[t._v(" 確認刪除 ")])])])])])],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h4"},[n("strong",[t._v("購物車")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("hr",{staticStyle:{width:"100%","text-align":"left","margin-left":"0"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header bg-danger text-white"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[n("span",[t._v("刪除產品")])]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],r=(n("99af"),n("b85c")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-5 col-md-4 col-lg-2"},[n("img",{staticClass:"img-fluid",staticStyle:{height:"15vh"},attrs:{src:t.item.product.imageUrl[0]},on:{click:function(e){return t.showProduct(t.item)}}})]),n("div",{staticClass:"col-7 col-md-8 col-lg-10"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-4 col-lg-2"},[n("h5",{staticClass:"card-text"},[t._v(t._s(t.item.product.title))])]),n("div",{staticClass:"col-12 col-md-8 col-lg-4"},[n("h5",{staticClass:"card-text"},[t._v(t._s(t.item.product.content))])]),n("div",{staticClass:"col-12 col-md-4 col-lg-2"},[n("td",{staticClass:"align-middle"},[n("div",{staticClass:"input-group",staticStyle:{"min-width":"150px"}},[n("div",{staticClass:"input-group-prepend"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return t.quantityUpdata(t.item.product.id,t.item.quantity+1)}}},[t._v(" + ")])]),n("input",{staticClass:"form-control text-center",staticStyle:{background:"white"},attrs:{id:"qty",type:"text",readonly:""},domProps:{value:t.item.quantity},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.quantityUpdata(t.item.product.id,e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button",disabled:1===t.item.quantity},on:{click:function(e){return t.quantityUpdata(t.item.product.id,t.item.quantity-1)}}},[t._v(" - ")])]),n("button",{on:{click:function(e){return t.deleteCart(t.item)}}},[n("i",{staticClass:"fas fa-trash-alt"})])])])]),n("div",{staticClass:"col-12 col-md-8 col-lg-3 text-right"},[n("h5",{staticClass:"card-text"},[t._v(" "+t._s(t.item.quantity)+" x $"+t._s(t.item.product.price)+" ")])])])])])},c=[],s={props:{item:Object},data:function(){return{tempProduct:{product:{title:""}}}},methods:{showProduct:function(t){console.log("showProduct",t.product.id),this.$emit("showProduct",t.product.id)},deleteCart:function(t){this.$emit("deleteCart",t)},quantityUpdata:function(t,e){var n=this;if(this.$emit("updating",!0),!(e<=0)){this.isLoading=!0;var i="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/shopping"),o={product:t,quantity:e};this.$http.patch(i,o).then((function(){n.isLoading=!1,n.$emit("updating",!1),n.$emit("updateCart")})).catch((function(t){n.isLoading=!1,n.$emit("updating",!1),console.log(t.response)}))}}}},u=s,l=(n("bb60"),n("2877")),d=Object(l["a"])(u,a,c,!1,null,"15d488ea",null),f=d.exports,p={components:{Cart:f},created:function(){this.getShoppingCart(1),this.getProducts(1)},data:function(){return{isLoading:!1,title:"",items:[],tempProduct:{product:{title:""}},tempProducts:[],firstTempProduct:{},tempIndex:0,user:{token:"",uuid:""},totalAmount:0,pages:{current_page:1,total_pages:0}}},methods:{showProduct:function(t){console.log("showProduct received: ",t),this.$router.push({path:"/product/".concat(t)})},delProduct:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/shopping/").concat(this.tempProduct.product.id);this.$http.delete(e).then((function(){$("#delCartModal").modal("hide"),t.isLoading=!1,t.getShoppingCart(1),t.$bus.$emit("update-cart",(function(){}))})).catch((function(e){$("#delCartModal").modal("hide"),t.isLoading=!1,console.log(e.response)}))},deleteCart:function(t){console.log("deleteCart",t),$("#delCartModal").modal("show"),this.tempProduct=Object.assign({},t)},updating:function(t){this.isLoading=t},updateCart:function(t){this.getShoppingCart(1)},getShoppingCart:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$bus.$emit("update-cart",(function(){})),this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/shopping?page=").concat(e);this.$http.get(n).then((function(e){var n;t.isLoading=!1,console.log(e.data.data),t.items=e.data.data,t.pages.current_page=e.data.meta.pagination.current_page,t.pages.total_pages=e.data.meta.pagination.total_pages,console.log(t.items),t.totalAmount=0;var i,o=Object(r["a"])(t.items);try{for(o.s();!(i=o.n()).done;)n=i.value,t.totalAmount+=n.quantity*n.product.price}catch(a){o.e(a)}finally{o.f()}})).catch((function(e){t.isLoading=!1,console.log(e.response)}))},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/products?page=").concat(e);this.$http.get(n).then((function(e){t.isLoading=!1,console.log(e.data.data),t.products=e.data.data,t.pages.current_page=e.data.meta.pagination.current_page,t.pages.total_pages=e.data.meta.pagination.total_pages,t.tempProducts=t.products,console.log("tempProducts",t.tempProducts),t.firstTempProduct={},t.tempProducts.length>0&&(t.firstTempProduct=t.tempProducts[0]);var n=0;for(n=0;n<t.tempProducts.length;n++)t.tempProducts[n].class=0===n?"carousel-item active":"carousel-item"})).catch((function(e){t.isLoading=!1,console.log(e.response)}))}}},g=p,h=(n("d13f"),Object(l["a"])(g,i,o,!1,null,"28e733e2",null));e["default"]=h.exports},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,o=n("69f3"),r=n("7dd0"),a="String Iterator",c=o.set,s=o.getterFor(a);r(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=i(n,o),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var i=n("0366"),o=n("7b0b"),r=n("9bdd"),a=n("e95a"),c=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,d,f,p,g=o(t),h="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,b=void 0!==v,y=u(g),C=0;if(b&&(v=i(v,m>2?arguments[2]:void 0,2)),void 0==y||h==Array&&a(y))for(e=c(g.length),n=new h(e);e>C;C++)p=b?v(g[C],C):g[C],s(n,C,p);else for(d=y.call(g),f=d.next,n=new h;!(l=f.call(d)).done;C++)p=b?r(d,v,[l.value,C],!0):l.value,s(n,C,p);return n.length=C,n}},"739c":function(t,e,n){},"746f":function(t,e,n){var i=n("428f"),o=n("5135"),r=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});o(e,t)||a(e,t,{value:r.f(t)})}},9936:function(t,e,n){},a4d3:function(t,e,n){"use strict";var i=n("23e7"),o=n("da84"),r=n("d066"),a=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),l=n("d039"),d=n("5135"),f=n("e8b5"),p=n("861d"),g=n("825a"),h=n("7b0b"),m=n("fc6a"),v=n("c04e"),b=n("5c6c"),y=n("7c73"),C=n("df75"),w=n("241c"),S=n("057f"),_=n("7418"),P=n("06cf"),x=n("9bf2"),O=n("d1e7"),$=n("9112"),j=n("6eeb"),A=n("5692"),k=n("f772"),L=n("d012"),q=n("90e3"),E=n("b622"),M=n("e538"),T=n("746f"),I=n("d44e"),U=n("69f3"),N=n("b727").forEach,F=k("hidden"),J="Symbol",D="prototype",Q=E("toPrimitive"),R=U.set,W=U.getterFor(J),z=Object[D],B=o.Symbol,G=r("JSON","stringify"),H=P.f,K=x.f,V=S.f,X=O.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),nt=A("wks"),it=o.QObject,ot=!it||!it[D]||!it[D].findChild,rt=c&&l((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=H(z,e);i&&delete z[e],K(t,e,n),i&&t!==z&&K(z,e,i)}:K,at=function(t,e){var n=Y[t]=y(B[D]);return R(n,{type:J,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},st=function(t,e,n){t===z&&st(Z,e,n),g(t);var i=v(e,!0);return g(n),d(Y,i)?(n.enumerable?(d(t,F)&&t[F][i]&&(t[F][i]=!1),n=y(n,{enumerable:b(0,!1)})):(d(t,F)||K(t,F,b(1,{})),t[F][i]=!0),rt(t,i,n)):K(t,i,n)},ut=function(t,e){g(t);var n=m(e),i=C(n).concat(gt(n));return N(i,(function(e){c&&!dt.call(n,e)||st(t,e,n[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},dt=function(t){var e=v(t,!0),n=X.call(this,e);return!(this===z&&d(Y,e)&&!d(Z,e))&&(!(n||!d(this,e)||!d(Y,e)||d(this,F)&&this[F][e])||n)},ft=function(t,e){var n=m(t),i=v(e,!0);if(n!==z||!d(Y,i)||d(Z,i)){var o=H(n,i);return!o||!d(Y,i)||d(n,F)&&n[F][i]||(o.enumerable=!0),o}},pt=function(t){var e=V(m(t)),n=[];return N(e,(function(t){d(Y,t)||d(L,t)||n.push(t)})),n},gt=function(t){var e=t===z,n=V(e?Z:m(t)),i=[];return N(n,(function(t){!d(Y,t)||e&&!d(z,t)||i.push(Y[t])})),i};if(s||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=q(t),n=function(t){this===z&&n.call(Z,t),d(this,F)&&d(this[F],e)&&(this[F][e]=!1),rt(this,e,b(1,t))};return c&&ot&&rt(z,e,{configurable:!0,set:n}),at(e,t)},j(B[D],"toString",(function(){return W(this).tag})),j(B,"withoutSetter",(function(t){return at(q(t),t)})),O.f=dt,x.f=st,P.f=ft,w.f=S.f=pt,_.f=gt,M.f=function(t){return at(E(t),t)},c&&(K(B[D],"description",{configurable:!0,get:function(){return W(this).description}}),a||j(z,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:B}),N(C(nt),(function(t){T(t)})),i({target:J,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=B(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),i({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:ft}),i({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:gt}),i({target:"Object",stat:!0,forced:l((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(h(t))}}),G){var ht=!s||l((function(){var t=B();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));i({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var i,o=[t],r=1;while(arguments.length>r)o.push(arguments[r++]);if(i=e,(p(e)||void 0!==t)&&!ct(t))return f(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ct(e))return e}),o[1]=e,G.apply(null,o)}})}B[D][Q]||$(B[D],Q,B[D].valueOf),I(B,J),L[F]=!0},a630:function(t,e,n){var i=n("23e7"),o=n("4df4"),r=n("1c7e"),a=!r((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:a},{from:o})},b0c0:function(t,e,n){var i=n("83ab"),o=n("9bf2").f,r=Function.prototype,a=r.toString,c=/^\s*function ([^ (]*)/,s="name";i&&!(s in r)&&o(r,s,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),n("a630"),n("fb6a"),n("b0c0"),n("25f0");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function o(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function r(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=o(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(s)throw a}}}}},bb60:function(t,e,n){"use strict";var i=n("9936"),o=n.n(i);o.a},d13f:function(t,e,n){"use strict";var i=n("739c"),o=n.n(i);o.a},d28b:function(t,e,n){var i=n("746f");i("iterator")},ddb0:function(t,e,n){var i=n("da84"),o=n("fdbc"),r=n("e260"),a=n("9112"),c=n("b622"),s=c("iterator"),u=c("toStringTag"),l=r.values;for(var d in o){var f=i[d],p=f&&f.prototype;if(p){if(p[s]!==l)try{a(p,s,l)}catch(h){p[s]=l}if(p[u]||a(p,u,d),o[d])for(var g in r)if(p[g]!==r[g])try{a(p,g,r[g])}catch(h){p[g]=r[g]}}}},e01a:function(t,e,n){"use strict";var i=n("23e7"),o=n("83ab"),r=n("da84"),a=n("5135"),c=n("861d"),s=n("9bf2").f,u=n("e893"),l=r.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var p=f.prototype=l.prototype;p.constructor=f;var g=p.toString,h="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=g.call(t);if(a(d,t))return"";var n=h?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,n){var i=n("b622");e.f=i},fb6a:function(t,e,n){"use strict";var i=n("23e7"),o=n("861d"),r=n("e8b5"),a=n("23cb"),c=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),f=n("ae40"),p=d("slice"),g=f("slice",{ACCESSORS:!0,0:0,1:2}),h=l("species"),m=[].slice,v=Math.max;i({target:"Array",proto:!0,forced:!p||!g},{slice:function(t,e){var n,i,l,d=s(this),f=c(d.length),p=a(t,f),g=a(void 0===e?f:e,f);if(r(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?o(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,p,g);for(i=new(void 0===n?Array:n)(v(g-p,0)),l=0;p<g;p++,l++)p in d&&u(i,l,d[p]);return i.length=l,i}})}}]);
//# sourceMappingURL=chunk-6e768fe4.1d3f882f.js.map