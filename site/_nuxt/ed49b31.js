(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{272:function(t,e,l){"use strict";l.r(e);l(41),l(12);var n={nuxtI18n:{locales:["ua","ru","en"]},name:"Header",computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},c=l(62),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header m-auto flex flex-col items-center my-5"},[l("img",{staticClass:"w-20",attrs:{src:"/bridge-icon.png",alt:""}}),t._v(" "),l("div",{staticClass:"block text-center"},[l("h1",{staticClass:"text-3xl mb-3"},[t._v(t._s(t.$t("title")))]),t._v(" "),t._l(t.availableLocales,(function(e,n){return l("nuxt-link",{key:e.code,attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name+(n===t.availableLocales.length-1?"":" /"))+"\n    ")])})),t._v(" "),l("h2",{staticClass:"text-2xl mt-4"},[t._v("\n      "+t._s(t.$t("subtitle"))+"\n    ")])],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:l(272).default})}}]);