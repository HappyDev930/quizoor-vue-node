(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbd95838"],{"2d97":function(s,t,e){"use strict";var a=e("6f1a"),r=e.n(a);r.a},"456d":function(s,t,e){var a=e("4bf8"),r=e("0d58");e("5eda")("keys",(function(){return function(s){return r(a(s))}}))},"5eda":function(s,t,e){var a=e("5ca1"),r=e("8378"),n=e("79e5");s.exports=function(s,t){var e=(r.Object||{})[s]||Object[s],i={};i[s]=t(e),a(a.S+a.F*n((function(){e(1)})),"Object",i)}},"6f1a":function(s,t,e){},"8e6e":function(s,t,e){var a=e("5ca1"),r=e("990b"),n=e("6821"),i=e("11e9"),o=e("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(s){var t,e,a=n(s),c=i.f,l=r(a),v={},d=0;while(l.length>d)e=c(a,t=l[d++]),void 0!==e&&o(v,t,e);return v}})},"990b":function(s,t,e){var a=e("9093"),r=e("2621"),n=e("cb7c"),i=e("7726").Reflect;s.exports=i&&i.ownKeys||function(s){var t=a.f(n(s)),e=r.f;return e?t.concat(e(s)):t}},c7f1:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"profile-section"},[e("vs-row",{attrs:{"vs-w":"12","vs-align":"flex-start"}},[e("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[e("vs-card",{style:{padding:"10px"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[s._v("\r\n              Name Change\r\n            ")])]),e("div",{staticClass:"vx-row mb-6"},[e("div",{staticClass:"vx-col sm:w-1/5 w-full"},[e("span",[s._v("First Name")])]),e("div",{staticClass:"vx-col sm:w-4/5 w-full"},[e("vs-input",{staticClass:"w-full",model:{value:s.firstname,callback:function(t){s.firstname=t},expression:"firstname"}})],1)]),e("div",{staticClass:"vx-row mb-6"},[e("div",{staticClass:"vx-col sm:w-1/5 w-full"},[e("span",[s._v("Last Name")])]),e("div",{staticClass:"vx-col sm:w-4/5 w-full"},[e("vs-input",{staticClass:"w-full",model:{value:s.lastname,callback:function(t){s.lastname=t},expression:"lastname"}})],1)]),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col sm:w-4/5 w-full ml-auto"},[e("vs-button",{staticClass:"mr-3 mb-2",on:{click:s.changeName}},[s._v("Submit")]),e("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"border"},on:{click:function(t){s.firstname=s.lastname=""}}},[s._v("Reset")])],1)])])],1),e("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[e("vs-card",{style:{padding:"10px"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[s._v("\r\n              Password Change\r\n            ")])]),e("div",{staticClass:"vx-row mb-6"},[e("div",{staticClass:"vx-col sm:w-1/5 w-full"},[e("span",[s._v("New Password")])]),e("div",{staticClass:"vx-col sm:w-4/5 w-full"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],ref:"newPassword",staticClass:"w-full",attrs:{name:"newPassword"},model:{value:s.newPassword,callback:function(t){s.newPassword=t},expression:"newPassword"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("newPassword"),expression:"errors.has('newPassword')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("newPassword")))])],1)]),e("div",{staticClass:"vx-row mb-6"},[e("div",{staticClass:"vx-col sm:w-1/5 w-full"},[e("span",[s._v("Confirm Password")])]),e("div",{staticClass:"vx-col sm:w-4/5 w-full"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:newPassword",expression:"'required|confirmed:newPassword'"}],staticClass:"w-full",attrs:{name:"confirmPassword"},model:{value:s.confirmPassword,callback:function(t){s.confirmPassword=t},expression:"confirmPassword"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("confirmPassword"),expression:"errors.has('confirmPassword')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("confirmPassword")))])],1)]),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col sm:w-4/5 w-full ml-auto"},[e("vs-button",{staticClass:"mr-3 mb-2",on:{click:s.changePassword}},[s._v("Submit")]),e("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"border"},on:{click:function(t){s.newPassword=s.confirmPassword=""}}},[s._v("Reset")])],1)])])],1)],1)],1)},r=[],n=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),i=e("69ca"),o=e("2f62");function c(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(s);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),e.push.apply(e,a)}return e}function l(s){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){Object(n["a"])(s,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(s,t,Object.getOwnPropertyDescriptor(e,t))}))}return s}var v={data:function(){return{firstname:"",lastname:"",oldPassword:"",newPassword:"",confirmPassword:""}},computed:l({},Object(o["b"])({user:function(s){return s.auth.initialState.user.user._id}})),methods:{changeName:function(){var s=this,t={id:this.user,firstname:this.firstname,lastname:this.lastname};return i["a"].changeName(t).then((function(t){"Name changed successfully"==t.data.message&&s.$vs.notify({title:t.data.message,color:"success",position:"top-right"})}))},changePassword:function(){var s=this;this.$validator.validate().then((function(t){if(console.log(t),t){var e={id:s.user,newPassword:s.newPassword};return i["a"].changePassword(e).then((function(t){"Password changed successfully"==t.data.message&&s.$vs.notify({title:t.data.message,color:"success",position:"top-right"})}))}}))}}},d=v,u=(e("2d97"),e("2877")),f=Object(u["a"])(d,a,r,!1,null,"16f3aeac",null);t["default"]=f.exports},f1ae:function(s,t,e){"use strict";var a=e("86cc"),r=e("4630");s.exports=function(s,t,e){t in s?a.f(s,t,r(0,e)):s[t]=e}}}]);
//# sourceMappingURL=chunk-fbd95838.c22956f8.js.map