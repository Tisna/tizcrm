(window.webpackJsonp=window.webpackJsonp||[]).push([[22,21],{1094:function(t,e,o){"use strict";o.r(e);o(4),o(31),o(10),o(59);var n={name:"FormDocument",props:{formTitle:{type:String,default:""},type:{type:String,default:""},url:{type:String,default:""}},data:function(){return{menu:"",menu2:"",menu3:"",menu4:"",logo:"",search:null,selectedItem:1,dialog:!1,checkbox:!1,deposit:!1,tax:!0,withholding:!1,submitLoad:!1,showLoading:!1,form:{},itemCategory:[],itemUnit:[],itemContact:[],itemAccounts:[],itemTag:[],itemPaymentTerm:[],itemWarehouse:[],itemFiles:[],taxDetails:[],statusProcessing:"insert",valueWhenIsEmpty:"0",tempTotalTax:0,subTotalMinDiscount:0,taxAmount:0,taxDiscount:0,amountBeforeTax:0,withholdingAmount:0,discountAmount:0,moneyOptions:{locale:"en",prefix:"",length:11,precision:0},moneyOptionTotal:{locale:"en",prefix:"",length:14,precision:2},moneyOptionTotalDiscount:{locale:"en",prefix:"",length:14,precision:0}}},computed:{depositAmount:function(){return this.form.deposit_amount},discountRate:function(){return this.form.discount_rate},discountType:function(){return this.form.discount_type},withholdingType:function(){return this.form.withholding_type},withholdingRate:function(){return this.form.withholding_rate},shippingFee:function(){return this.form.shipping_fee}},watch:{shippingFee:{handler:function(){this.changeCalculation()},deep:!0},depositAmount:{handler:function(){this.changeCalculation()},deep:!0},withholdingType:{handler:function(){this.changeCalculation()},deep:!0},discountType:{handler:function(){this.changeCalculation()},deep:!0},discountRate:{handler:function(){this.changeCalculation()},deep:!0},withholdingRate:{handler:function(){this.changeCalculation()},deep:!0}},mounted:function(){this.getItemCategory(),this.getItemUnit(),this.getAccounts(),this.getContact(),this.getPaymentTerms(),this.getTax()},methods:{calcTotal:function(data){this.form.discount_per_line=data.discountAmount,this.form.sub_total=data.subTotal,this.form.tax_details=this.reduceArrayTax(data.taxDetail),this.taxDetails=this.reduceArrayTax(data.taxDetail),this.form.amount=data.amount+this.tempTotalTax,this.form.balance_due=this.form.amount,this.subTotalMinDiscount=parseFloat(this.form.sub_total)-parseFloat(this.form.discount_per_line),this.taxAmount=this.tempTotalTax,0===this.form.sub_total&&(this.form.discount_rate=0,this.form.discount_amount=0),console.log(this.form.discount_amount),this.changeCalculation()},changeCalculation:function(){"Percent"===this.form.discount_type?this.form.discount_rate>0&&(this.subTotalMinDiscount=parseFloat(this.form.sub_total)-parseFloat(this.form.discount_per_line),this.form.discount_amount=this.form.discount_rate/100*this.subTotalMinDiscount,this.taxDiscount=this.form.discount_rate/100*this.tempTotalTax):(this.form.discount_amount=parseFloat(this.form.discount_rate),this.tempTotalTax>0&&(this.taxDiscount=this.tempTotalTax-this.form.discount_amount)),this.taxAmount=parseFloat(this.tempTotalTax)-parseFloat(this.taxDiscount),this.taxAmount=void 0===this.taxAmount?0:this.taxAmount,this.form.discount_rate>0&&(this.form.tax_details=this.reduceArrayTaxAfterDiscount(this.taxDetails)),this.form.amount=this.form.sub_total-this.form.discount_per_line-this.form.discount_amount+this.taxAmount,this.amountBeforeTax=this.form.amount-this.taxAmount,"Percent"===this.form.withholding_type?this.form.withholding_rate>0&&(this.form.withholding_amount=this.form.withholding_rate/100*this.amountBeforeTax):this.form.withholding_amount=parseFloat(this.form.withholding_rate),this.form.balance_due=this.form.amount-this.form.deposit_amount-this.form.withholding_amount-parseFloat(this.form.shipping_fee)},reduceArrayTaxAfterDiscount:function(t){var e=[],o=this;return t.reduce((function(t,n){if(t[n.name]||(t[n.name]={name:n.name,amount:0},e.push(t[n.name])),o.form.discount_rate>0){var r=0;r="Percent"===o.form.discount_type?o.form.discount_rate/100*n.amount:o.form.discount_rate,t[n.name].amount=n.amount-r}return t}),{}),e},reduceArrayTax:function(t){var e=[],o=0;return t.forEach((function(t,e){o+=parseFloat(t.amount)})),this.tempTotalTax=o,t.reduce((function(t,o){return t[o.name]||(t[o.name]={name:o.name,amount:0},e.push(t[o.name])),t[o.name].amount+=o.amount,t}),{}),e},showLoad:function(t){this.showLoading=t},setData:function(form){var t=this;this.showLoading=!0,setTimeout((function(){t.$refs.childDetails.setDataToDetails([{item_number:null,description:null,qty:null,unit:null}],form)}),500),this.form=Object.assign({},form),this.moneyOptionTotal.prefix=this.form.default_currency_symbol,this.moneyOptionTotalDiscount.prefix=this.form.default_currency_symbol,this.moneyOptions.prefix=this.form.default_currency_symbol,this.statusProcessing="insert"},eventGetFiles:function(data){this.itemFiles=data.row},getItemCategory:function(){var t=this;this.$axios.get("/api/master/categories",{params:{type:"Item Category"}}).then((function(e){t.itemCategory=e.data.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getItemUnit:function(){var t=this;this.$axios.get("/api/inventory/item-units",{params:{type:"Item Category"}}).then((function(e){t.itemUnit=e.data.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getAccounts:function(){var t=this;this.$axios.get("/api/financial/accounts",{params:{type:"All"}}).then((function(e){t.itemAccounts=e.data.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getContact:function(){var t=this;this.$axios.get("/api/inventory/contacts",{params:{type:"All"}}).then((function(e){t.itemContact=e.data.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getPaymentTerms:function(){var t=this;this.$axios.get("/api/financial/payment-terms",{params:{type:"All"}}).then((function(e){t.itemPaymentTerm=e.data.data.auto_complete})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getTax:function(){var t=this;this.$refs.uploadField.getFiles(),this.$axios.get("/api/financial/taxes",{params:{type:"All"}}).then((function(e){t.$auth.$storage.setLocalStorage("tax",e.data.data.simple),t.$auth.$storage.setLocalStorage("tax_row",e.data.data.rows)})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},changePaymentTerm:function(){this.$axios.get("/api/financial/payment-terms/"+this.form.payment_term_id).then((function(t){}))},changeContact:function(){var t=this.form.contact_id;this.form.contact_id=t.id,this.form.contact_address=this.form.contact_address?this.form.contact_address:t.address,this.form.shipping_address=this.form.shipping_address?this.form.shipping_address:t.shipping_address},checkDocument:function(){switch(this.$route.query.type){case"SQ":case"PQ":return!1;default:return!0}},returnData:function(){var t=this,details={};return t.$refs.childDetails.getAddData().forEach((function(e,o){t.$refs.childDetails.checkIfEmptyRow(o)||(details[o]=e)})),this.form.items=details,this.form}}},r=o(64),l=o(74),c=o.n(l),m=o(599),d=o(250),h=o(510),f=o(509),v=o(753),_=o(530),y=o(1030),x=o(527),w=o(1043),C=o(565),k=o(226),T=o(228),$=o(148),A=o(230),D=o(40),I=o(231),E=o(519),O=o(556),V=o(587),F=o(534),S=o(520),P=o(514),W=o(814),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{staticClass:"pt-0"},[o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"3",sm:"12"}},[o("v-autocomplete",{attrs:{items:t.itemContact,label:"Customer/Vendor","return-object":"","item-value":"id","item-text":"name",outlined:"",dense:"",clearable:"","hide-details":"auto"},on:{change:t.changeContact},model:{value:t.form.contact_id,callback:function(e){t.$set(t.form,"contact_id",e)},expression:"form.contact_id"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"2",sm:"4"}},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Transaction Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.issued_at,callback:function(e){t.$set(t.form,"issued_at",e)},expression:"form.issued_at"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.form.issued_at,callback:function(e){t.$set(t.form,"issued_at",e)},expression:"form.issued_at"}})],1)],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"2",sm:"4"}},[o("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-text-field",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.form.shipping_info,expression:"form.shipping_info"}],attrs:{label:"Shipping Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.shipping_date,callback:function(e){t.$set(t.form,"shipping_date",e)},expression:"form.shipping_date"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.form.shipping_date,callback:function(e){t.$set(t.form,"shipping_date",e)},expression:"form.shipping_date"}})],1)],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"2",sm:"4"}},[o("v-text-field",{attrs:{readonly:"",label:"Transaction Number",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.document_number,callback:function(e){t.$set(t.form,"document_number",e)},expression:"form.document_number"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"3"}},[o("v-combobox",{attrs:{items:t.itemTag,"search-input":t.search,"hide-selected":"",label:"Tags","hide-details":"",dense:"",multiple:"","persistent-hint":"","small-chips":"",outlined:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",[t._v('\n                      No results matching "'),o("strong",[t._v(t._s(t.search))]),t._v('". Press '),o("kbd",[t._v("enter")]),t._v(" to create a new one\n                    ")])],1)],1)]},proxy:!0}]),model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}})],1)],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"3",sm:"12"}},[o("v-textarea",{attrs:{rows:"2",label:"Billing Address",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.contact_address,callback:function(e){t.$set(t.form,"contact_address",e)},expression:"form.contact_address"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"2",sm:"4"}},[o("v-menu",{ref:"menu3",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Due Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.due_at,callback:function(e){t.$set(t.form,"due_at",e)},expression:"form.due_at"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu3=!1}},model:{value:t.form.due_at,callback:function(e){t.$set(t.form,"due_at",e)},expression:"form.due_at"}})],1)],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"2",sm:"4"}},[o("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.form.shipping_info,expression:"form.shipping_info"}],attrs:{label:"Ship Via",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.shipping_via,callback:function(e){t.$set(t.form,"shipping_via",e)},expression:"form.shipping_via"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"2",sm:"4"}},[o("v-text-field",{attrs:{label:"Reference No",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.reference_no,callback:function(e){t.$set(t.form,"reference_no",e)},expression:"form.reference_no"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"3",sm:"12"}},[o("v-textarea",{directives:[{name:"show",rawName:"v-show",value:t.form.shipping_info,expression:"form.shipping_info"}],attrs:{rows:"2",label:"Shipping Address",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.shipping_address,callback:function(e){t.$set(t.form,"shipping_address",e)},expression:"form.shipping_address"}})],1)],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pr-1 pl-1 pb-1",attrs:{cols:"12",md:"3",sm:"6"}},[o("v-checkbox",{staticClass:"mt-0",attrs:{dense:"","hide-details":"",label:"Shipping Info"},model:{value:t.form.shipping_info,callback:function(e){t.$set(t.form,"shipping_info",e)},expression:"form.shipping_info"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"2",sm:"6"}},[o("v-select",{attrs:{items:t.itemPaymentTerm,"item-value":"id","item-text":"name",label:"Payment Term",outlined:"",dense:"","hide-details":"auto"},on:{change:t.changePaymentTerm},model:{value:t.form.payment_term_id,callback:function(e){t.$set(t.form,"payment_term_id",e)},expression:"form.payment_term_id"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"2",sm:"6"}},[o("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.form.shipping_info,expression:"form.shipping_info"}],attrs:{label:"Tracking No",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.tracking_code,callback:function(e){t.$set(t.form,"tracking_code",e)},expression:"form.tracking_code"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"2",sm:"6"}},[o("v-select",{attrs:{items:t.itemWarehouse,"item-text":"name","item-value":"id",label:"Warehouse",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.warehouse_id,callback:function(e){t.$set(t.form,"warehouse_id",e)},expression:"form.warehouse_id"}})],1)],1)],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[o("v-card",[o("div",{staticClass:"scroll-container-min"},[o("LazyDocumentTableDetail",{ref:"childDetails",on:{calcTotal:t.calcTotal}})],1),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"blue darken-1",dark:"",small:"",depressed:""},on:{click:function(e){return t.$refs.childDetails.addLine()}}},[t._v("\n              Add Line\n              "),o("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4",lg:"4"}},[o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"12"}},[o("v-textarea",{attrs:{rows:"2",label:"Message",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.footer,callback:function(e){t.$set(t.form,"footer",e)},expression:"form.footer"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"12"}},[o("v-textarea",{attrs:{rows:"2",label:"Memo",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.notes,callback:function(e){t.$set(t.form,"notes",e)},expression:"form.notes"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"12"}},[o("DocumentFieldUpload",{ref:"uploadField",attrs:{"form-data":t.form,"form-type":"document"},on:{eventGetFiles:t.eventGetFiles}})],1)],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"2",lg:"3"}},[t.itemFiles.length>0?o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"12"}},[o("v-list",{attrs:{dense:""}},[o("v-subheader",[t._v("Files")]),t._v(" "),o("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.itemFiles,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-content",[o("v-list-item-title",[o("a",{attrs:{href:e.directory,target:"_blank"}},[t._v(t._s(e.filename))])])],1),t._v(" "),o("v-list-item-action",[o("v-btn",{attrs:{small:"",dark:"",icon:""}},[o("v-icon",{attrs:{color:"red"},on:{click:function(o){return t.$refs.uploadField.deleteFile(e)}}},[t._v("mdi-delete")])],1)],1)],1)})),1)],1)],1):t._e()],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"6",lg:"5"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"8"}}),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{staticClass:"text-money",attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptionTotal,readonly:"",label:"Sub Total",outlined:"",dense:"",reverse:"","hide-details":"auto"},model:{value:t.form.sub_total,callback:function(e){t.$set(t.form,"sub_total",e)},expression:"form.sub_total"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"8"}}),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{staticClass:"text-money",attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptionTotal,readonly:"",label:"Discount Per Lines",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.discount_per_line,callback:function(e){t.$set(t.form,"discount_per_line",e)},expression:"form.discount_per_line"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("v-select",{attrs:{items:["Amount","Percent"],label:"Discount Type",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.discount_type,callback:function(e){t.$set(t.form,"discount_type",e)},expression:"form.discount_type"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{staticClass:"text-money",attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptionTotalDiscount,label:"Discount Rate",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.discount_rate,callback:function(e){t.$set(t.form,"discount_rate",e)},expression:"form.discount_rate"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{staticClass:"text-money",attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptionTotal,readonly:"",label:"Discount Amount",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.discount_amount,callback:function(e){t.$set(t.form,"discount_amount",e)},expression:"form.discount_amount"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},t._l(t.form.tax_details,(function(e,n){return t.form.tax_details.length>0?o("v-row",{key:n,attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"8"}}),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{staticClass:"text-money",attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptionTotal,readonly:"",label:e.name,outlined:"",dense:"","hide-details":"auto"},model:{value:e.amount,callback:function(o){t.$set(e,"amount",o)},expression:"item.amount"}})],1)],1):t._e()})),1),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:t.form.shipping_info,expression:"form.shipping_info"}],attrs:{cols:"12",md:"8"}}),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:t.form.shipping_info,expression:"form.shipping_info"}],staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{staticClass:"text-money",attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptionTotal,label:"Shipping Fee",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.shipping_fee,callback:function(e){t.$set(t.form,"shipping_fee",e)},expression:"form.shipping_fee"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"8"}}),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{staticClass:"text-money",attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptionTotal,readonly:"",label:"Total",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}})],1),t._v(" "),t.checkDocument()?o("v-col",{attrs:{cols:"12"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"2"}},[o("v-checkbox",{staticClass:"mt-0",attrs:{dense:"","hide-details":"",label:"Withholding"},model:{value:t.form.withholding_info,callback:function(e){t.$set(t.form,"withholding_info",e)},expression:"form.withholding_info"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"3"}},[o("v-select",{directives:[{name:"show",rawName:"v-show",value:t.form.withholding_info,expression:"form.withholding_info"}],attrs:{items:["Amount","Percent"],label:"Type",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.withholding_type,callback:function(e){t.$set(t.form,"withholding_type",e)},expression:"form.withholding_type"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"3"}},[o("vuetify-money",{directives:[{name:"show",rawName:"v-show",value:t.form.withholding_info,expression:"form.withholding_info"}],staticClass:"text-money",attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptionTotal,label:"Rate",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.withholding_rate,callback:function(e){t.$set(t.form,"withholding_rate",e)},expression:"form.withholding_rate"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{directives:[{name:"show",rawName:"v-show",value:t.form.withholding_info,expression:"form.withholding_info"}],staticClass:"text-money",attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptionTotal,readonly:"",label:"Amount",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.withholding_amount,callback:function(e){t.$set(t.form,"withholding_amount",e)},expression:"form.withholding_amount"}})],1),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:t.form.withholding_info,expression:"form.withholding_info"}],staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"12"}},[o("v-select",{attrs:{items:t.itemAccounts,"item-value":"id","item-text":"name",label:"Withholding Account",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.withholding_account_id,callback:function(e){t.$set(t.form,"withholding_account_id",e)},expression:"form.withholding_account_id"}})],1)],1)],1):t._e(),t._v(" "),t.checkDocument()?o("v-col",{attrs:{cols:"12"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"3"}},[o("v-checkbox",{staticClass:"mt-0",attrs:{dense:"","hide-details":"",label:"Deposit"},model:{value:t.form.deposit_info,callback:function(e){t.$set(t.form,"deposit_info",e)},expression:"form.deposit_info"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"5"}},[o("v-select",{directives:[{name:"show",rawName:"v-show",value:t.form.deposit_info,expression:"form.deposit_info"}],attrs:{items:t.itemAccounts,"item-text":"name","item-value":"id",label:"Deposit Account",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.deposit_account_id,callback:function(e){t.$set(t.form,"deposit_account_id",e)},expression:"form.deposit_account_id"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{directives:[{name:"show",rawName:"v-show",value:t.form.deposit_info,expression:"form.deposit_info"}],staticClass:"text-money",attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptionTotal,label:"Amount",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.deposit_amount,callback:function(e){t.$set(t.form,"deposit_amount",e)},expression:"form.deposit_amount"}})],1)],1)],1):t._e(),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-spacer"),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{staticClass:"text-money",attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptionTotal,readonly:"",label:"Balance Due",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.balance_due,callback:function(e){t.$set(t.form,"balance_due",e)},expression:"form.balance_due"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),o("LazyDocumentDialogSendEmail",{ref:"dialogSendEmail"})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DocumentFieldUpload:o(848).default}),c()(component,{VAutocomplete:m.a,VBtn:d.a,VCard:h.a,VCardActions:f.a,VCheckbox:v.a,VCol:_.a,VCombobox:y.a,VContainer:x.a,VDatePicker:w.a,VForm:C.a,VIcon:k.a,VList:T.a,VListItem:$.a,VListItemAction:A.a,VListItemContent:D.a,VListItemGroup:I.a,VListItemTitle:D.c,VMenu:E.a,VRow:O.a,VSelect:V.a,VSpacer:F.a,VSubheader:S.a,VTextField:P.a,VTextarea:W.a})},569:function(t,e,o){"use strict";var n=o(91),r=o(1);e.a=r.a.extend({name:"rippleable",directives:{ripple:n.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},572:function(t,e,o){var content=o(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("2e2bc7da",content,!0,{sourceMap:!1})},573:function(t,e,o){"use strict";o.d(e,"b",(function(){return m}));o(4),o(71),o(12);var n=o(80),r=o(569),l=o(252),c=o(5);function m(t){t.preventDefault()}e.a=Object(c.a)(n.a,r.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(o){return t.valueComparator(o,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=n.a.options.methods.genLabel.call(this);return label?(label.data.on={click:m},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:m},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var o=input.length;(input=input.filter((function(o){return!t.valueComparator(o,e)}))).length===o&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},577:function(t,e,o){var n=o(15)(!1);n.push([t.i,'.v-input--selection-controls{margin-top:4px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1);transition-property:transform;width:24px;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(0.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=n},593:function(t,e,o){var content=o(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("12a190a6",content,!0,{sourceMap:!1})},594:function(t,e,o){var n=o(15)(!1);n.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=n},753:function(t,e,o){"use strict";o(11),o(9),o(12),o(13),o(10),o(14);var n=o(105),r=o(2),l=(o(4),o(71),o(593),o(572),o(89)),c=o(80),m=o(573),d=["title"];function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=m.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return f(f({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(n.a)(t,d));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",f(f({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},848:function(t,e,o){"use strict";o.r(e);o(59);var n=o(755),r=o.n(n),l=(o(756),{name:"FieldUpload",components:{Dropzone:r.a},props:{formType:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{showLoadingAttachment:!1,form:this.formData,options:{url:"/api/document-files",timeout:9e9,addRemoveLinks:!0,withCredentials:!0,thumbnailWidth:50,thumbnailHeight:50,acceptedFiles:"image/*",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{"X-XSRF-TOKEN":this.$cookies.get("XSRF-TOKEN")}}}},methods:{sendingParams:function(t,e,o){var n=this.form.id?this.form.id:this.form.temp_id;o.append("temp_id",n),o.append("type",this.formType)},handleError:function(t,e,o){this.$swal({type:"error",title:"Error...",text:e.message})},reloadAttachment:function(t,e){var o=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(setTimeout((function(){o.getFiles()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},getFiles:function(){var t=this;this.showLoadingAttachment=!0;var e=this,o=this.form.id?this.form.id:this.form.temp_id;this.$axios.get(e.options.url,{params:{type:this.formType,temp_id:o}}).then((function(o){t.$emit("eventGetFiles",{total:o.data.data.total,row:o.data.data.rows}),e.showLoadingAttachment=!1})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Error...",text:e.response.message})}))},deleteFile:function(t){var e=this,o=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&e.$axios.delete(o.options.url,{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),o.getFiles()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))}}}),c=o(64),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("dropzone",{ref:"attachment",attrs:{id:"attachment",options:t.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(e,o,n){return t.sendingParams(e,o,n)},"vdropzone-success":function(e,o){return t.reloadAttachment(e,o)},"vdropzone-error":function(e,o,n){return t.handleError(e,o,n)}}})}),[],!1,null,null,null);e.default=component.exports}}]);