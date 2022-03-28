(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1026:function(t,e,n){"use strict";n.r(e);n(24),n(242),n(12),n(4);var o={name:"Account",layout:"dashboard",data:function(){return{totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[{text:"Account Code",value:"number"},{text:"Account Name",value:"name"},{text:"Category",value:"category"},{text:"Default Tax",value:"tax"},{text:"Balance",value:"opening_balance"}]}},head:function(){return{title:"Chart Of Accounts"}},computed:{formTitle:function(){return-1===this.editedIndex?"New Account":"Edit Account"},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{newData:function(){this.editedIndex=-1,this.$refs.forms.newData()},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.$refs.forms.editItem(t)},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/financial/accounts",{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.data.form),t.defaultItem=Object.assign({},e.data.data.form)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},r=n(64),c=n(74),l=n.n(c),d=n(1008),m=n(548),h=n(226),f=n(596),v=n(533),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{sm12:""}},[n("div",{staticClass:"mt-0"},[n("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"mx-auto",attrs:{type:"table"}}),t._v(" "),n("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[n("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Chart of Accounts"},on:{emitData:t.emitData,newData:t.newData}})]},proxy:!0},{key:"item.ACTIONS",fn:function(e){var o=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.editItem(o)}}},[t._v("\n            mdi-pencil-circle\n          ")])]}}],null,!0)})],1)]),t._v(" "),n("LazyFinancialFormAccount",{ref:"forms",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,url:"/api/financial/accounts"},on:{getDataFromApi:t.getDataFromApi}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VDataTable:d.a,VFlex:m.a,VIcon:h.a,VLayout:f.a,VSkeletonLoader:v.a})},548:function(t,e,n){"use strict";n(240);var o=n(241);e.a=Object(o.a)("flex")}}]);