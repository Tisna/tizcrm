(window.webpackJsonp=window.webpackJsonp||[]).push([[16,25],{1128:function(t,e,o){"use strict";o.r(e);o(12),o(4),o(48);var n={name:"FormAccount",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},url:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,submitLoad:!1,form:this.formData,itemCategory:[],itemAllCurrency:[],itemCurrency:[],itemAccountType:[],itemBank:[],itemTax:[],statusProcessing:"insert"}},mounted:function(){this.getCategory(),this.getCurrency()},methods:{newData:function(form){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},form),this.itemAccountType=form.account_type_list},editItem:function(t,form){this.form=Object.assign({},t),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.itemAccountType=form.account_type_list},changeAccountType:function(){this.itemCategory=this.itemAllCurrency.filter(this.filterTransType)},filterTransType:function(t){if(t.category_type===this.form.account_type)return!0},getCategory:function(){var t=this;this.$axios.get("/api/financial/account-category",{params:{type:"Account Category"}}).then((function(e){t.itemAllCurrency=e.data.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getCurrency:function(){var t=this;this.$axios.get("/api/financial/currency",{params:{type:"Account Category"}}).then((function(e){t.itemCurrency=e.data.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},returnData:function(data){"Banks"===data.type?this.itemBank=data.item:"Item Unit"===data.type&&(this.itemUnit=data.item)},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},save:function(){var form=this.form,t=this.statusProcessing;"insert"===t?this.store("post",this.url,form):"update"===t&&this.store("put",this.url+"/"+this.form.id,form),this.submitLoad=!1},store:function(t,e,data){var o=this,n=this;n.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){o.$refs.dialogForm.closeDialog(),o.$emit("getDataFromApi")})).catch((function(t){o.$swal({type:"error",title:"Error",text:t.response.data.message}),n.submitLoad=!1}))}}},r=o(47),c=o(54),l=o.n(c),d=o(614),m=o(153),f=o(537),h=o(538),v=o(578),y=o(565),_=o(523),x=o(768),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("DialogForm",{ref:"dialogForm",attrs:{"max-width":"500px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-form",{staticClass:"pt-2"},[o("v-container",[o("v-row",{attrs:{dense:""}},[o("v-col",{attrs:{cols:"12"}},[o("v-autocomplete",{attrs:{items:t.itemAccountType,label:"Account Type",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},on:{change:t.changeAccountType},model:{value:t.form.account_type,callback:function(e){t.$set(t.form,"account_type",e)},expression:"form.account_type"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-autocomplete",{attrs:{items:t.itemCategory,label:"Category","item-text":"name","item-value":"id",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.category_id,callback:function(e){t.$set(t.form,"category_id",e)},expression:"form.category_id"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{rows:"3",label:"Description",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[o("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n          "+t._s(t.buttonTitle)+"\n        ")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{DialogForm:o(580).default}),l()(component,{VAutocomplete:d.a,VBtn:m.a,VCol:f.a,VContainer:h.a,VForm:v.a,VRow:y.a,VTextField:_.a,VTextarea:x.a})},580:function(t,e,o){"use strict";o.r(e);var n={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=o(47),c=o(54),l=o.n(c),d=o(153),m=o(239),f=o(108),h=o(546),v=o(527),y=o(234),_=o(543),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"no-click-animation":"",persistent:"",origin:t.original,"max-width":t.maxWidth,transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[o("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),t._t("content"),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[t._t("addLine"),t._v(" "),o("v-spacer"),t._v(" "),t._t("saveData")],2)],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardTitle:f.c,VDialog:h.a,VDivider:v.a,VIcon:y.a,VSpacer:_.a})}}]);