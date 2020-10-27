(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03ec6cfe"],{"6d09":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("後台產品列表")]),a("div",{staticClass:"container mt-3"},[a("div",[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal("new")}}},[t._v(" 建立新的產品 ")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.content))]),a("td",[t._v(t._s(t._f("toThousandSeperator")(e.origin_price)))]),a("td",[t._v(t._s(t._f("toThousandSeperator")(e.price)))]),a("td",[e.enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal("edit",e,s)}}},[t._v(" 編輯 ")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.openModal("delete",e,s)}}},[t._v(" 刪除 ")])])])])})),0)]),a("pagination",{attrs:{pages:t.pages},on:{"emit-pages":t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v(t._s(t.title))])]),t._m(1)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[0],expression:"tempProduct.imageUrl[0]"}],staticClass:"form-control",attrs:{id:"imageUrl",type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl[0]},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.imageUrl,0,e.target.value)}}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{id:"category",type:"text",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{id:"unit",type:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{id:"origin_price",type:"number",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.enabled,expression:"tempProduct.enabled"}],staticClass:"form-check-input",attrs:{id:"enabled",type:"checkbox","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.enabled)?t._i(t.tempProduct.enabled,null)>-1:t._q(t.tempProduct.enabled,1)},on:{change:function(e){var a=t.tempProduct.enabled,s=e.target,o=s.checked?1:0;if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&t.$set(t.tempProduct,"enabled",a.concat([i])):r>-1&&t.$set(t.tempProduct,"enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v(" 確認 ")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delProduct}},[t._v(" 確認刪除 ")])])])])])],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("標題")]),a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(a("99af"),a("e20e")),r=a("1157"),c=a.n(r),n={components:{Pagination:i["a"]},created:function(){this.getProducts(1)},props:["token"],methods:{refreshScreen:function(){this.getProducts(this.pages.current_page)},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/products?page=").concat(e);this.$http.get(a).then((function(e){t.isLoading=!1,console.log(e.data.data),t.products=e.data.data,t.pages.current_page=e.data.meta.pagination.current_page,t.pages.total_pages=e.data.meta.pagination.total_pages,console.log(t.products)})).catch((function(e){console.log(e),t.isLoading=!1}))},updateProduct:function(){var t,e=this;switch(console.log(this.tempProduct),this.isNew){case!0:t="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/admin/ec/product"),this.$http.post(t,this.tempProduct).then((function(t){console.log(e.tempProduct),c()("#productModal").modal("hide"),e.refreshScreen()})).catch((function(t){console.log(t),alert(t.response.data.message)}));break;case!1:t="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/admin/ec/product/").concat(this.tempProduct.id),this.$http.patch(t,this.tempProduct).then((function(t){e.refreshScreen(),c()("#productModal").modal("hide")})).catch((function(t){console.log(t),alert(t.response.data.message)})),this.products[this.tempIndex]=this.tempProduct,this.$set(this.products,this.tempIndex,this.tempProduct);break}},openModal:function(t,e,a){var s=this;switch(this.tempIndex=a,console.log(this.tempIndex),t){case"new":this.title="新增產品",this.tempProduct={imageUrl:[]},this.isNew=!0,c()("#productModal").modal("show");break;case"edit":var o;this.title="編輯產品",this.tempProduct=Object.assign({},e),this.isNew=!1,console.log(this.tempProduct),o="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/admin/ec/product/").concat(this.tempProduct.id),this.$http.get(o).then((function(t){console.log(t.data),s.tempProduct=Object.assign({},t.data.data),c()("#productModal").modal("show")})).catch((function(t){console.log(t),alert(t.response.data.message)}));break;case"delete":c()("#delProductModal").modal("show"),this.tempProduct=Object.assign({},e);break;default:break}},delProduct:function(){var t,e=this;console.log(this.tempProduct),t="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/admin/ec/product/").concat(this.tempProduct.id),this.$http.delete(t,this.tempProduct).then((function(t){c()("#delProductModal").modal("hide"),e.refreshScreen()})).catch((function(t){console.log(t),alert(t.response.data.message)}))}},data:function(){return{isLoading:!1,title:"",products:[],tempProduct:{imageUrl:[]},tempIndex:0,user:{token:"",uuid:""},pages:{current_page:1,total_pages:0}}}},l=n,d=a("2877"),p=Object(d["a"])(l,s,o,!1,null,null,null);e["default"]=p.exports},e20e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e,s){return a("li",{key:s,staticClass:"page-item",class:{active:e===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},o=[],i={data:function(){return{}},props:{pages:{}},methods:{emitPages:function(t){this.$emit("emit-pages",t)}}},r=i,c=a("2877"),n=Object(c["a"])(r,s,o,!1,null,null,null);e["a"]=n.exports}}]);
//# sourceMappingURL=chunk-03ec6cfe.118930a4.js.map