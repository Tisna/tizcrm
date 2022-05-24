(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1058:function(t,e,n){"use strict";n.r(e);n(48),n(4),n(38),n(42),n(838),n(348);var o={name:"FormDocument",layout:"dashboard",data:function(){return{breadcrumb:[],form:{},audits:{},defaultItem:{},url:"/api/documents/form",dialogLoading:!1,showLoading:!1,itemAction:[],actionName:"Save",items:[{title:"Preview",action:"preview",icon:"mdi-printer"},{title:"Send Email",action:"sendEmail",icon:"mdi-email"}]}},head:function(){return{title:"Form Document"}},created:function(){this.getDataFromApi()},methods:{checkDisable:function(){return"closed"===this.form.status||"cancel"===this.form.status},arrowLink:function(t,e){var n=this;this.$axios.get(this.url+"/arrow",{params:{type:e,status:t,document:this.$route.query.document}}).then((function(t){n.$router.push({path:"/dashboard/documents/form",query:{document:t.data.data.id,type:e}}),setTimeout((function(){n.getDataFromApi()}),300)})).catch((function(t){n.$swal({type:"error",title:"Error",text:t.response.data.message})}))},getDataFromApi:function(t){var e=this;this.showLoading=!0;var n=this.$route.query.type;this.$axios.get(this.url+"/"+this.$route.query.document,{params:{type:n,copyFromId:t}}).then((function(t){var form="";e.audits=t.data.data.audits,t.data.data.count>0?(form=t.data.data.rows,e.actionName="Update"):(form=t.data.data.form,e.actionName="Save"),e.form=Object.assign({},form),e.defaultItem=Object.assign({},form),t.data.data.count>0&&(e.itemAction=t.data.data.action,setTimeout((function(){e.$refs.documentAction.setAction(e.itemAction,e.checkDisable())}),50)),e.getBreadcrumb(n,form,form.status),setTimeout((function(){e.$refs.formDocument.setData(e.form)}),30)})).catch((function(t){var n=void 0!==t.response?t.response.data.message:t;e.$swal({type:"error",title:"Error",text:n})})).finally((function(t){e.showLoading=!1}))},actionDocument:function(t){var e=this;switch(t){case"SQ":case"SO":case"PQ":case"PO":var n=this.$route.query.document;this.$router.push({path:"/dashboard/documents/form",query:{document:0,type:t}}),setTimeout((function(){e.actionName="Save",e.getBreadcrumb(t,e.form,e.form.status),e.$refs.formDocument.changeValue("type",t),e.$refs.formDocument.changeValue("parent_id",n)}),300);break;case"C":this.$refs.formDocument.changeValue("status","cancel"),this.store();break;case"sendEmail":this.openDialogEmail()}},deleteDocument:function(t){var e=this,n=this;this.$swal({title:"Are you sure?",text:"The data will be deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.value&&e.$axios.delete(e.url+"/"+t).then((function(t){e.$swal({type:"success",title:"Success...",text:"Data Deleted!"}),e.$router.push({path:n.$helper.mappingAction(n.$route.query.type)})})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},printAction:function(t){switch(t){case"preview":this.previewDocument();break;case"sendEmail":this.openDialogEmail()}},openDialogEmail:function(){this.$refs.dialogSendEmail.openEmailDialog(this.form)},previewDocument:function(){var t=this,e=this;this.dialogLoading=!0,this.$axios.get("/api/documents/print",{params:{id:e.form.id},responseType:"arraybuffer"}).then((function(n){t.dialogLoading=!1;var o=window.URL.createObjectURL(new Blob([n.data])),link=document.createElement("a");link.href=o,link.setAttribute("download",e.form.document_number+".pdf"),document.body.appendChild(link),link.click()})).catch((function(e){t.dialogLoading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getBreadcrumb:function(t,form,e){var text="0"!==this.$route.query.document?form.document_number:"Create Document";this.breadcrumb=[{text:"Dashboard",disabled:!1,to:{path:"/dashboard"}},{text:this.$helper.mapping(t),disabled:!1,to:{path:this.$helper.mappingAction(t)}},{text:text,disabled:!0,to:{path:"/dashboard/documents/form"}}]},mappingType:function(t){if("SQ"===t)return"/dashboard/sales/quote"},store:function(){var t=this,e="0"===this.$route.query.document?"post":"patch",n="0"===this.$route.query.document?this.url:this.url+"/"+this.$route.query.document,data=this.$refs.formDocument.returnData(this.$route.query.document);this.dialogLoading=!0,this.$axios({method:e,url:n,data:data}).then((function(e){t.$router.push({path:"/dashboard/documents/form",query:{document:e.data.data.id,type:e.data.data.type}}),t.$nuxt.$emit("snackbar",e.data.message),setTimeout((function(){t.getDataFromApi()}),50)})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(e){t.dialogLoading=!1}))}}},r=n(47),c=n(54),l=n.n(c),d=n(153),m=n(537),v=n(234),h=n(235),f=n(155),_=n(53),y=n(134),w=n(529),D=n(565),x=n(590),k=n(528),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"12",md:t.itemAction.length>0?"10":"12"}},[n("DocumentFormWindow",{ref:"formWindow",attrs:{breadcrumb:t.breadcrumb},on:{getDataFromApi:t.getDataFromApi},scopedSlots:t._u([{key:"action-toolbar",fn:function(){return[n("v-btn",{attrs:{text:"",small:""},on:{click:function(e){return t.arrowLink("prev",t.form.type)}}},[n("v-icon",[t._v("mdi-arrow-left")]),t._v(" "),n("span",[t._v("Prev")])],1),t._v(" "),n("v-btn",{attrs:{text:"",small:""},on:{click:function(e){return t.arrowLink("next",t.form.type)}}},[n("v-icon",[t._v("mdi-arrow-right")]),t._v(" "),n("span",[t._v("Next")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return t.$refs.dialogAudit.openDialogAudit(t.audits)}}},[n("v-icon",[t._v("mdi-history")])],1),t._v(" "),n("v-btn",{attrs:{color:"green",dark:"",icon:"",small:""},on:{click:t.getDataFromApi}},[n("v-icon",[t._v("mdi-refresh")])],1)]},proxy:!0},{key:"content",fn:function(){return[n("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}],attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("v-skeleton-loader",{attrs:{type:"list-item-three-line, table-thead, table-tbody, list-item-three-line"}})],1)],1),t._v(" "),n("LazyDocumentFormInput",{directives:[{name:"show",rawName:"v-show",value:!t.showLoading,expression:"!showLoading"}],ref:"formDocument"})]},proxy:!0},{key:"action",fn:function(){return[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,r=e.on;return[n("v-btn",t._g(t._b({staticClass:"white--text",attrs:{color:"green",disabled:t.checkDisable(),small:""}},"v-btn",o,!1),r),[t._v("\n              Print & Preview\n              "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                mdi-printer\n              ")])],1)]}}])},[t._v(" "),n("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{dense:"",link:""},on:{click:function(n){return t.printAction(e.action)}}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,r=e.on;return[n("v-btn",t._g(t._b({staticClass:"white--text ml-5",attrs:{color:"green",disabled:t.checkDisable(),small:""}},"v-btn",o,!1),r),[t._v("\n              Action\n              "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                mdi-folder-cog\n              ")])],1)]}}])},[t._v(" "),n("v-list",t._l(t.itemAction,(function(e){return n("v-list-item",{key:e.title,attrs:{dense:"",link:""},on:{click:function(n){return t.actionDocument(e.action)}}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[n("v-btn",{staticClass:"white--text",attrs:{color:"green darken-1",disabled:t.checkDisable(),small:""},on:{click:t.store}},[t._v("\n          "+t._s(t.actionName)+"\n          "),n("v-icon",[t._v("\n            mdi-check\n          ")])],1)]},proxy:!0}])})],1),t._v(" "),t.itemAction.length>0?n("v-col",{attrs:{cols:"12",md:"2"}},[n("v-subheader",{staticStyle:{"margin-top":"-20px"}},[t._v("Action")]),t._v(" "),n("DocumentCardAction",{ref:"documentAction"})],1):t._e(),t._v(" "),n("LazyDocumentDialogSendEmail",{ref:"dialogSendEmail"}),t._v(" "),n("LazyDocumentDialogAudit",{ref:"dialogAudit"}),t._v(" "),t.dialogLoading?n("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{DocumentFormWindow:n(859).default,DocumentCardAction:n(860).default}),l()(component,{VBtn:d.a,VCol:m.a,VIcon:v.a,VList:h.a,VListItem:f.a,VListItemContent:_.a,VListItemIcon:y.a,VListItemTitle:_.c,VMenu:w.a,VRow:D.a,VSkeletonLoader:x.a,VSubheader:k.a})},859:function(t,e,n){"use strict";n.r(e);var o={name:"FormWindow",props:{breadcrumb:{type:Array,default:function(){return[]}}},methods:{getDataFromApi:function(){this.$emit("getDataFromApi")}}},r=n(47),c=n(54),l=n.n(c),d=n(962),m=n(239),v=n(108),h=n(527),f=n(543),_=n(66),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{staticClass:"toolbar-content",staticStyle:{height:"32px"},attrs:{flat:"",color:"grey lighten-2",dense:""}},[n("v-breadcrumbs",{staticClass:"hidden-sm-and-down",attrs:{items:t.breadcrumb,divider:"/"}}),t._v(" "),n("v-spacer",{staticClass:"hidden-xs-only"}),t._v(" "),t._t("action-toolbar")],2),t._v(" "),t._t("content"),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[t._t("action"),t._v(" "),n("v-spacer"),t._v(" "),t._t("saveData")],2)],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBreadcrumbs:d.a,VCard:m.a,VCardActions:v.a,VDivider:h.a,VSpacer:f.a,VToolbar:_.a})},860:function(t,e,n){"use strict";n.r(e);var o={name:"CardAction",props:{title:{type:String,default:""}},data:function(){return{loading:!0,checkDisable:!1,action:[]}},methods:{setAction:function(t,e){this.checkDisable=e,this.action=t},processAction:function(t){}}},r=n(47),c=n(54),l=n.n(c),d=n(153),m=n(239),v=n(108),h=n(527),f=n(917),_=n(918),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-timeline",{attrs:{dense:""}},t._l(t.action,(function(e){return n("v-timeline-item",{key:e.title,attrs:{small:"",color:e.color}},[n("v-card",{staticClass:"elevation-2"},[n("v-card-text",{staticClass:"pa-2"},[n("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.title))]),t._v(" "),n("v-divider"),t._v(" "),"Clone"!==e.title&&"Cancel"!==e.title?n("div",[n("span",[t._v("No : no")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("Date : no")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("Status : no")]),t._v(" "),n("br")]):t._e()],1),t._v(" "),e.button?n("v-card-actions",[n("v-btn",{staticClass:"white--text",attrs:{disabled:e.button,"x-small":"",color:e.color},on:{click:function(n){return t.processAction(e.action)}}},["Clone"===e.title||"Cancel"===e.title?n("span",{domProps:{textContent:t._s(e.title)}}):n("span",[t._v("Create")])])],1):t._e()],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardText:v.b,VDivider:h.a,VTimeline:f.a,VTimelineItem:_.a})}}]);