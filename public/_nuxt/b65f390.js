(window.webpackJsonp=window.webpackJsonp||[]).push([[144,36],{1116:function(t,e,r){"use strict";r.r(e);var o={name:"SalesPayment",layout:"dashboard",head:function(){return{title:"Incoming Payment"}},created:function(){var t=this;this.$nuxt.$on("getDataFromApi",(function(e){return t.getDataFromApi(e)}))},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},n=r(47),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"SP","form-url":"/app/sales/payment/form","header-table":[{text:"Number",value:"document_number",cellClass:"disable-wrap"},{text:"Customer",value:"contact_name",cellClass:"disable-wrap"},{text:"Date",value:"issued_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Due Date",value:"due_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Balance Due",value:"balance_due",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}}),t._v(" "),r("NuxtChild",{attrs:{"keep-alive":"","keep-alive-props":{include:["form"]}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DocumentTableDocument:r(569).default})},559:function(t,e,r){var content=r(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5db1c400",content,!0,{sourceMap:!1})},560:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(255,255,255,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-icon,.v-application--is-ltr .v-alert>.v-alert__content{margin-right:16px}.v-application--is-rtl .v-alert>.v-icon,.v-application--is-rtl .v-alert>.v-alert__content{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-ltr .v-alert__border--right{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent !important;border:thin solid currentColor !important}.v-alert--outlined .v-alert__icon{color:inherit !important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor !important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon::after{transform:scale(1)}.v-alert--text{background:transparent !important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=o},561:function(t,e,r){"use strict";r(248);var o=r(249);e.a=Object(o.a)("layout")},566:function(t,e,r){"use strict";r(248);var o=r(249);e.a=Object(o.a)("flex")},569:function(t,e,r){"use strict";r.r(e);r(24),r(251),r(12),r(4);var o={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},items:{type:Array,default:function(){return[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable}},computed:{formTitle:function(){return-1===this.editedIndex?"New "+this.typeDocument:"Edit "+ +this.typeDocument},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.mappingDocument()},mounted:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.$router.push({path:this.formUrl,query:{document:this.form.id,type:this.typeDocument}})},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"paid":case"closed":return"green";case"overdue":case"cancel":return"red"}},editItem:function(t){this.$router.push({path:"/app/salesquote/form",query:{document:t.id,type:this.typeDocument}})},actions:function(t,e){"edit"===t?this.editItem(e):this.deleteItem(e)},deleteItem:function(t){var e=this;this.$axios.delete("/api/master/permissions/"+t.menu_name).then((function(t){e.getDataFromApi(),e.$nuxt.$emit("getMenu","nice payload")}))},mappingDocument:function(){this.toolbarTitle=this.$helper.mapping(this.typeDocument)},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/documents/form",{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search,type:this.typeDocument}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.data.form),t.defaultItem=Object.assign({},e.data.data.form),t.company=t.$auth.$storage.getState("company")})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},n=r(47),l=r(54),c=r.n(l),d=r(583),h=r(153),m=r(1050),v=r(566),f=r(234),_=r(561),x=r(235),y=r(155),D=r(53),w=r(529),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{attrs:{sm12:""}},[r("div",{staticClass:"mt-0"},[r("v-alert",{staticClass:"pr-0 pl-0",attrs:{border:"top",elevation:"1","colored-border":"",color:"green lighten-2",dense:""}},[r("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[r("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle},on:{emitData:t.emitData,newData:t.newData}})]},proxy:!0},{key:"item.document_number",fn:function(e){var o=e.item;return[r("a",{on:{click:function(e){return t.editItem(o)}}},[r("strong",{domProps:{textContent:t._s(o.document_number)}})])]}},{key:"item.status",fn:function(e){var o=e.item;return[r("v-btn",{attrs:{text:"",small:""}},[r("v-icon",{attrs:{color:t.statusColor(o),left:""}},[t._v("\n                mdi-circle\n              ")]),t._v("\n              "+t._s(o.status)+"\n            ")],1)]}},{key:"item.balance_due",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(t.form.default_currency_symbol+" "+t.$formatter.formatPrice(r.balance_due))+"\n          ")]}},{key:"item.amount",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(t.form.default_currency_symbol+" "+t.$formatter.formatPrice(r.amount))+"\n          ")]}},{key:"item.actions",fn:function(e){var o=e.item;return[r("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(e){return t.actions(t.itemAction,o)}}},[t._v("\n              "+t._s(t.itemText)+"\n            ")]),t._v(" "),r("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",n,!1),o),[r("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,on:{click:function(r){return t.actions(e.action,o)}}},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),1)],1)]}}],null,!0)})],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:d.a,VBtn:h.a,VDataTable:m.a,VFlex:v.a,VIcon:f.a,VLayout:_.a,VList:x.a,VListItem:y.a,VListItemContent:D.a,VListItemTitle:D.c,VMenu:w.a})},583:function(t,e,r){"use strict";r(11),r(9),r(12),r(4),r(13),r(10),r(14);var o=r(1),n=(r(39),r(559),r(116)),l=r(138),c=r(43),d=r(34),h=r(17),m=r(2).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),v=r(5),f=r(8);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(v.a)(n.a,d.a,m).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})}}]);