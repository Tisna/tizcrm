(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1097:function(t,n,e){"use strict";e.r(n);var o={name:"quotation",data:function(){return{title:"Sales Quotations",items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}]}},mounted:function(){var data={item:{title:this.title}};this.$refs.dialog.openDialog(data)},methods:{close:function(){this.$router.back(),this.$nuxt.$emit("getDataFromApi")}}},r=e(47),c=e(54),l=e.n(c),m=e(153),d=e(234),v=e(235),f=e(155),_=e(53),k=e(529),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("LazyFormDialogFull",{ref:"dialog",on:{close:t.close},scopedSlots:t._u([{key:"content",fn:function(){return[e("LazyDocumentFormInput",{ref:"formDocument"})]},proxy:!0},{key:"actions",fn:function(){return[e("v-btn",{staticClass:"mr-3",attrs:{color:"green darken-1",dark:"",rounded:""},on:{click:t.close}},[t._v("\n      Save\n\n      "),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",r,!1),o),[e("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[t._v(" "),e("v-list",t._l(t.items,(function(n,i){return e("v-list-item",{key:i},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(n.text))])],1)],1)})),1)],1)],1)]},proxy:!0}])})}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:m.a,VIcon:d.a,VList:v.a,VListItem:f.a,VListItemContent:_.a,VListItemTitle:_.c,VMenu:k.a})}}]);