(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1059:function(t,e,r){"use strict";r.r(e);r(4),r(37),r(42),r(894),r(349),r(59);var n={name:"PrintRegistration",layout:"default",data:function(){return{form:{no_nisn:""},show:!1,message:"",error:!1,loading:!1}},methods:{processData:function(){var t=this;this.loading=!0,this.$axios.get("/api/ppdb/print",{params:this.form,responseType:"arraybuffer"}).then((function(e){var r=new Blob([e.data],{type:"application/pdf"}),n=window.URL.createObjectURL(r),link=document.createElement("a");link.href=window.URL.createObjectURL(r),link.download=t.form.no_nisn+".pdf",document.body.appendChild(link),link.click(),t.loading=!1,setTimeout((function(){document.body.removeChild(link),window.URL.revokeObjectURL(n)}),100)})).catch((function(e){t.loading=!1,t.error=!0,t.message=e.response.data.message,t.loading=!1}))},clear:function(){this.message="",this.error=!1}}},o=r(64),c=r(74),d=r.n(c),l=r(250),f=r(510),h=r(509),v=r(527),m=r(548),_=r(565),w=r(226),O=r(227),y=r(534),j=r(514),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-form",{nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.processData.apply(null,arguments)}}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"",md4:"","offset-md4":""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[t.loading?[r("v-progress-linear",{attrs:{height:"10",indeterminate:""}})]:t._e(),t._v("\n          Cetak Bukti Pendaftaran\n          "),r("hr")],2),t._v(" "),r("v-card-text",[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{filled:"",label:"NISN",required:""},model:{value:t.form.no_nisn,callback:function(e){t.$set(t.form,"no_nisn",e)},expression:"form.no_nisn"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-flex",{staticClass:"text-right",attrs:{xs12:""}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"info",small:"",loading:t.loading},on:{click:t.processData}},[t._v("\n              Print\n              "),r("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-print ")])],1)],1)],1)],1)],1),t._v(" "),t.error?r("v-flex",{attrs:{xs12:"",sm4:"","offset-sm4":""}},[r("div",{staticClass:"red darken-2 text-xs-center pa-1"},[r("span",{staticClass:"white--text"},[t._v(t._s(t.message))])])]):t._e()],1)],1)}),[],!1,null,"329c68d0",null);e.default=component.exports;d()(component,{VBtn:l.a,VCard:f.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VContainer:v.a,VFlex:m.a,VForm:_.a,VIcon:w.a,VProgressLinear:O.a,VSpacer:y.a,VTextField:j.a})},509:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return f}));var n=r(510),o=r(0),c=Object(o.j)("v-card__actions"),d=Object(o.j)("v-card__subtitle"),l=Object(o.j)("v-card__text"),f=Object(o.j)("v-card__title");n.a},548:function(t,e,r){"use strict";r(240);var n=r(241);e.a=Object(n.a)("flex")},565:function(t,e,r){"use strict";var n=r(2),o=(r(39),r(58),r(196),r(12),r(4),r(10),r(59),r(108),r(11),r(9),r(13),r(14),r(5)),c=r(90),d=r(111);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})}}]);