(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1125:function(t,n,e){"use strict";e.r(n);var o={name:"Snackbar",data:function(){return{snackbar:!1,text:"My timeout is set to 2000.",timeout:2e3}},methods:{display:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8e3,text=arguments.length>1?arguments[1]:void 0;this.snackbar=!0,this.timeout=t,this.text=text}}},c=o,r=e(47),l=e(54),k=e.n(l),v=e(153),d=e(542),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("v-snackbar",{attrs:{bottom:"",right:"",timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(n){var o=n.attrs;return[e("v-btn",t._b({attrs:{color:"red",text:""},on:{click:function(n){t.snackbar=!1}}},"v-btn",o,!1),[t._v("\n        Close\n      ")])]}}]),model:{value:t.snackbar,callback:function(n){t.snackbar=n},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n\n    ")])],1)}),[],!1,null,null,null);n.default=component.exports;k()(component,{VBtn:v.a,VSnackbar:d.a})}}]);