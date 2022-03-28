(window.webpackJsonp=window.webpackJsonp||[]).push([[81,25],{1075:function(t,e,n){"use strict";n.r(e);var o={name:"SalesPayment",layout:"dashboard",head:function(){return{title:"Incoming Payment"}}},r=n(64),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("DocumentTableDocument",{attrs:{"type-document":"SP"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DocumentTableDocument:n(559).default})},548:function(t,e,n){"use strict";n(240);var o=n(241);e.a=Object(o.a)("flex")},559:function(t,e,n){"use strict";n.r(e);n(24),n(242),n(12),n(4);var o={name:"TableDocument",props:{typeDocument:{type:String,default:""}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[{text:"Number",value:"document_number"},{text:"Customer",value:"contact_name"},{text:"Date",value:"issued_at"},{text:"Due Date",value:"due_at"},{text:"Status",value:"status",align:"center"},{text:"Balance Due",value:"balance_due",align:"right"},{text:"Total",value:"amount",align:"right"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"New "+this.typeDocument:"Edit "+ +this.typeDocument},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.mappingDocument()},methods:{newData:function(){this.$router.push({path:"/dashboard/documents/form",query:{id:0,status:"save",type:this.typeDocument}})},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"paid":return"green";case"overdue":return"red"}},editItem:function(t){this.$router.push({path:"/dashboard/documents/form",query:{id:t.id,status:"update",type:this.typeDocument}})},mappingDocument:function(){switch(this.typeDocument){case"PQ":this.toolbarTitle="Purchase Quotation";break;case"PO":this.toolbarTitle="Purchase Order";break;case"PD":this.toolbarTitle="Goods Receipt";break;case"PI":this.toolbarTitle="A/P Invoice";break;case"PP":this.toolbarTitle="Outgoing Payment";break;case"PN":this.toolbarTitle="Goods Return";break;case"SQ":this.toolbarTitle="Sales Quotation";break;case"SO":this.toolbarTitle="Sales Order";break;case"SD":this.toolbarTitle="Sales Delivery";break;case"SI":this.toolbarTitle="A/R Invoice";break;case"SP":this.toolbarTitle="Incoming Payment";break;case"SR":this.toolbarTitle="Sales Return"}},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/documents",{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search,type:this.typeDocument}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.data.form),t.defaultItem=Object.assign({},e.data.data.form),t.company=t.$auth.$storage.getState("company")})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},r=n(64),c=n(74),l=n.n(c),m=n(250),d=n(1044),h=n(548),f=n(226),v=n(598),y=n(533),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{sm12:""}},[n("div",{staticClass:"mt-0"},[n("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"mx-auto",attrs:{type:"table"}}),t._v(" "),n("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[n("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle},on:{emitData:t.emitData,newData:t.newData}})]},proxy:!0},{key:"item.document_number",fn:function(e){var o=e.item;return[n("a",{domProps:{textContent:t._s(o.document_number)},on:{click:function(e){return t.editItem(o)}}})]}},{key:"item.status",fn:function(e){var o=e.item;return[n("v-btn",{attrs:{text:"",small:""}},[n("v-icon",{attrs:{color:t.statusColor(o),left:""}},[t._v("\n              mdi-circle\n            ")]),t._v("\n            "+t._s(o.status)+"\n          ")],1)]}},{key:"item.balance_due",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.form.default_currency_symbol+" "+t.$formatter.formatPrice(n.balance_due))+"\n        ")]}},{key:"item.amount",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.form.default_currency_symbol+" "+t.$formatter.formatPrice(n.amount))+"\n        ")]}}],null,!0)})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a,VDataTable:d.a,VFlex:h.a,VIcon:f.a,VLayout:v.a,VSkeletonLoader:y.a})}}]);