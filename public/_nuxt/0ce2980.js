(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1054:function(t,e,n){"use strict";n.r(e);var r={name:"VideoCard",props:{video:{type:Object,required:!0},channel:{type:Object,required:!0},card:{type:Object,default:function(){return{}}}}},c=n(64),o=n(74),l=n.n(o),d=n(510),v=n(509),f=n(530),j=n(226),y=n(191),O=n(148),w=n(232),m=n(558),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"content-bg card mx-auto",attrs:{"max-width":t.card.maxWidth,flat:"",tile:"",router:"",to:t.video.url}},[n("v-img",{attrs:{src:t.video.thumb,height:"200px"}}),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},["noAvatar"!==t.card.type?n("v-col",{attrs:{cols:"2"}},[n("v-list-item",{staticClass:"pl-0 pt-3",attrs:{router:"",to:t.channel.url}},[n("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[n("v-img",{staticClass:"elevation-6",attrs:{src:t.channel.avatar}})],1)],1)],1):t._e(),t._v(" "),n("v-col",[n("v-card-title",{staticClass:"pl-2 pt-3 subtitle-2 font-weight-medium"},[t._v("\n        "+t._s(t.video.title)+"\n      ")]),t._v(" "),n("v-card-subtitle",{staticClass:"pl-2 pb-0"},[t._v("\n        "+t._s(t.channel.name)+"\n      ")]),t._v(" "),n("v-card-subtitle",{staticClass:"pl-2 pt-0"},[t._v("\n        "+t._s(t.video.views)+" views"),n("v-icon",[t._v("mdi-circle-small")]),t._v(t._s(t.video.createdAt)+"\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardSubtitle:v.b,VCardTitle:v.d,VCol:f.a,VIcon:j.a,VImg:y.a,VListItem:O.a,VListItemAvatar:w.a,VRow:m.a})},509:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return v}));var r=n(510),c=n(0),o=Object(c.j)("v-card__actions"),l=Object(c.j)("v-card__subtitle"),d=Object(c.j)("v-card__text"),v=Object(c.j)("v-card__title");r.a},558:function(t,e,n){"use strict";n(9),n(12),n(13),n(14);var r=n(2),c=(n(4),n(39),n(58),n(29),n(11),n(24),n(66),n(325),n(37),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(42),n(10),n(243),n(1)),o=n(70),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],j=["start","end","center"];function y(t,e){return f.reduce((function(n,r){return n[t+Object(l.H)(r)]=e(),n}),{})}var O=function(t){return[].concat(j,["baseline","stretch"]).includes(t)},w=y("align",(function(){return{type:String,default:null,validator:O}})),m=function(t){return[].concat(j,["space-between","space-around"]).includes(t)},_=y("justify",(function(){return{type:String,default:null,validator:m}})),h=function(t){return[].concat(j,["space-between","space-around","stretch"]).includes(t)},C=y("alignContent",(function(){return{type:String,default:null,validator:h}})),S={align:Object.keys(w),justify:Object.keys(_),alignContent:Object.keys(C)},V={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var r=V[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},w),{},{justify:{type:String,default:null,validator:m}},_),{},{alignContent:{type:String,default:null,validator:h}},C),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var d in n)l+=String(n[d]);var v=P.get(l);return v||function(){var t,e;for(e in v=[],S)S[e].forEach((function(t){var r=n[t],c=x(e,t,r);c&&v.push(c)}));v.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,v)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:v}),c)}})}}]);