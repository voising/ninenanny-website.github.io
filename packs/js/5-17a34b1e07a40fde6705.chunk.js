(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{348:function(t,e,s){},380:function(t,e,s){},381:function(t,e,s){},382:function(t,e,s){"use strict";var n=s(348);s.n(n).a},383:function(t,e,s){},400:function(t,e,s){"use strict";var n=s(5),r=s(6);function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(s,!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var c={name:"PhoneNumberVerification",props:["value"],data:function(){return{form:{phone_number:"",phone_country_code:"",phone_confirmation_code:""},loading:!1}},computed:Object(r.c)(["user"]),mounted:function(){this.form={phone_number:this.value||"",phone_country_code:this.user.phone_country_code,phone_confirmation_code:""}},methods:a({},Object(r.b)(["setUser","updateUser"]),{confirmCode:function(){var t=this;this.loading=!0,n.l.phoneConfirm({},{code:this.form.phone_confirmation_code}).then((function(e){t.setUser(e.body.data.attributes),t.$toast.success("All good! Your phone number is verified"),t.loading=!1}))},sendPhoneConfirmationCode:function(){var t=this;this.loading=!0,this.updateUser(a({},this.user,{phone_number:this.form.phone_number,phone_country_code:this.form.phone_country_code})).then((function(e){n.l.phoneConfirmationCode().then((function(e){t.setUser(e.body.data.attributes),t.loading=!1}))}))},updateCountry:function(t){var e=t.countryCode;this.phone_country_code=e}})},l=(s(382),s(3)),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui--phone-number-verification"},[s("vue-phone-number-input",{attrs:{"default-country-code":t.user.phone_country_code||"HU"},on:{input:function(e){return t.$emit("input",t.form.phone_number)},update:t.updateCountry},model:{value:t.form.phone_number,callback:function(e){t.$set(t.form,"phone_number",e)},expression:"form.phone_number"}}),!t.user.phone_confirmation_sent_at&&t.form.phone_number.length?s("div",{staticClass:"text-right"},[s("b-button",{staticClass:"mt-2 ml-auto",class:{loading:t.loading},attrs:{size:"sm",variant:"outline-primary"},on:{click:t.sendPhoneConfirmationCode}},[t._v("Send verification code by SMS")])],1):t._e(),t.user.phone_confirmation_sent_at&&t.form.phone_number.length&&!t.user.phone_confirmed_at?s("div",{staticClass:"is-flex mt-2 valign"},[s("label",{staticClass:"classic has-fg-1 text-right mr-3"},[t._v("Please enter the code")]),s("div",{staticClass:"input-group d-inline-flex w-50"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone_confirmation_code,expression:"form.phone_confirmation_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"123456"},domProps:{value:t.form.phone_confirmation_code},on:{input:function(e){e.target.composing||t.$set(t.form,"phone_confirmation_code",e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("b-button",{class:{loading:t.loading},attrs:{size:"sm",variant:"primary"},on:{click:t.confirmCode}},[t._v("Send")])],1)])]):t._e()],1)}),[],!1,null,null,null);e.a=u.exports},407:function(t,e,s){"use strict";var n=s(380);s.n(n).a},408:function(t,e,s){"use strict";var n=s(381);s.n(n).a},409:function(t,e,s){"use strict";var n=s(383);s.n(n).a},436:function(t,e,s){"use strict";s.r(e);var n=s(6);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(s,!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={name:"OffersList",components:{},props:[],data:function(){return{isLoading:!1,querying:!0}},computed:i({},Object(n.c)(["user"])),mounted:function(){Paddle.Setup({vendor:101642})},methods:i({},Object(n.b)([""]),{subscribe:function(t){var e=this;window.Paddle.Checkout.open({product:t,email:this.user.email,customer_country:this.user.country,allowQuantity:!1,passthrough:'{"user_id": '.concat(this.user.id,"}"),successCallback:function(t){e.$toast.success(e.$t("thank_you_for_your_purchase")),e.$auth.refresh({success:function(t){e.$store.dispatch("setUser",t.body.data)}})}})}})},c=(s(407),s(3));function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(s,!0).forEach((function(e){p(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var b={name:"SubscriptionsList",components:{OffersList:Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui--offers-list"},[s("div",{staticClass:"pricing-inner section-inner"},[s("div",[s("div",{staticClass:"pricing-tables-wrap"},[s("div",{staticClass:"pricing-table is-revealing"},[s("div",{staticClass:"pricing-table-inner"},[t._m(0),t._v(" "),s("div",{staticClass:"pricing-table-cta"},[s("b-button",{staticClass:"button button-secondary button-shadow button-block",on:{click:function(e){return t.subscribe("569984")}}},[t._v("\n                Choose\n              ")])],1)])]),t._v(" "),s("div",{staticClass:"pricing-table is-revealing"},[s("div",{staticClass:"pricing-table-inner"},[t._m(1),t._v(" "),s("div",{staticClass:"pricing-table-cta"},[s("b-button",{staticClass:"button button-primary button-shadow button-block",on:{click:function(e){return t.subscribe("569985")}}},[t._v("\n                Choose\n              ")])],1)])]),t._v(" "),s("div",{staticClass:"pricing-table is-revealing"},[s("div",{staticClass:"pricing-table-inner"},[t._m(2),t._v(" "),s("div",{staticClass:"pricing-table-cta"},[s("b-button",{staticClass:"button button-primary button-shadow button-block",on:{click:function(e){return t.subscribe("569985")}}},[t._v("\n                Choose\n              ")])],1)])])])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pricing-table-main"},[s("div",{staticClass:"pricing-table-header mb-24 pb-24"},[s("div",{staticClass:"pricing-table-title h4 mt-0 mb-16"},[t._v("\n                  Babysitter\n                ")]),t._v(" "),s("div",{staticClass:"pricing-table-price"},[s("span",{staticClass:"pricing-table-price-amount h1"},[t._v("4000")]),t._v(" "),s("span",{staticClass:"pricing-table-price-currency"},[t._v("HUF")]),t._v("\n                  /y\n\n                  "),s("span",{staticClass:"text-muted"},[t._v("(incl. VAT)")])])]),t._v(" "),s("ul",{staticClass:"pricing-table-features list-reset text-xs"},[s("li",[s("span",[t._v("Create your ad")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pricing-table-main"},[s("div",{staticClass:"pricing-table-header mb-24 pb-24"},[s("div",{staticClass:"pricing-table-title h4 mt-0 mb-16"},[t._v("\n                  Parent - Short Pass\n                ")]),t._v(" "),s("div",{staticClass:"pricing-table-price"},[s("span",{staticClass:"pricing-table-price-amount h1"},[t._v("3000")]),t._v(" "),s("span",{staticClass:"pricing-table-price-currency"},[t._v("HUF")]),t._v(" "),s("span",{staticClass:"text-muted"},[t._v("(incl. VAT)")])])]),t._v(" "),s("ul",{staticClass:"pricing-table-features list-reset text-xs"},[s("li",[s("span",[t._v("Contact babysitters")])]),t._v(" "),s("li",[s("span",[t._v("10-day pass")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pricing-table-main"},[s("div",{staticClass:"pricing-table-header mb-24 pb-24"},[s("div",{staticClass:"pricing-table-title h4 mt-0 mb-16"},[t._v("\n                  Parent - Yearly Pass\n                ")]),t._v(" "),s("div",{staticClass:"pricing-table-price"},[s("span",{staticClass:"pricing-table-price-amount h1"},[t._v("19000")]),t._v(" "),s("span",{staticClass:"pricing-table-price-currency"},[t._v("HUF")]),t._v(" "),s("span",{staticClass:"text-muted"},[t._v("(incl. VAT)")])])]),t._v(" "),s("ul",{staticClass:"pricing-table-features list-reset text-xs"},[s("li",[s("span",[t._v("Contact babysitters")])]),t._v(" "),s("li",[s("span",[t._v("Full-year pass")])])])])}],!1,null,null,null).exports},props:[],data:function(){return{isLoading:!1,querying:!0,form:{subscription_name:"Free trial"}}},computed:u({},Object(n.c)(["user","subscription"]),{subscriptionName:function(){return"pro"==this.user.role?"Pro":"pro_plus"==this.user.role?"Pro+":"Free trial"}}),created:function(){this.getSubscriptions()},mounted:function(){},methods:u({},Object(n.b)(["getSubscriptions"]))},m=(s(408),Object(c.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui--subscriptions-list"},[s("div",{staticClass:"box shadow rounded p-4"},[s("b-form-group",{staticClass:"has-text-left",attrs:{label:t.$t("offer")}},[s("input",{staticClass:"form-control",attrs:{id:"subscription_name",type:"text",disabled:"disabled"},domProps:{value:t.subscriptionName}})]),s("b-form-group",{staticClass:"has-text-left",attrs:{label:t.$t("valid_until")}},[s("input",{staticClass:"form-control",attrs:{id:"subscription_validity",type:"text",disabled:"disabled"},domProps:{value:t.$d(new Date(t.user.valid_until),"short")}})])],1),s("div",{staticClass:"text-right"},[-1===t.user.role.indexOf("pro")?s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.offers_modal",modifiers:{offers_modal:!0}}],staticClass:"mt-3",attrs:{size:"sm",variant:"primary"}},[t._v(t._s(t.$t("subscribe")))]):t._e(),-1!==t.user.role.indexOf("pro")?s("b-button",{staticClass:"mt-3 mr-2",attrs:{size:"sm",variant:"outline-primary"}},[t._v(t._s(t.$t("update_subscription")))]):t._e(),-1!==t.user.role.indexOf("pro")?s("b-button",{staticClass:"mt-3",attrs:{size:"sm",variant:"outline-danger"}},[t._v(t._s(t.$t("cancel_subscription")))]):t._e()],1),s("b-modal",{attrs:{id:"offers_modal","hide-footer":"","hide-header":""},scopedSlots:t._u([{key:"modal-header",fn:function(e){e.close;return[t._v("\xa0")]}},{key:"modal-footer",fn:function(e){e.ok,e.cancel;return[t._v("\xa0")]}}])},[s("offers-list")],1)],1)}),[],!1,null,null,null).exports);function f(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(s,!0).forEach((function(e){_(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function _(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var v={name:"MyAccount",components:{PhoneNumberVerification:s(400).a,SubscriptionsList:m},data:function(){return{i:"my_account.",error:null,isLoading:!1,isSuccess:!1,form:{first_name:"",last_name:"",phone_number:"",email:"",has_analytics:!1,newPassword:null}}},computed:d({},Object(n.c)(["user"]),{name:function(){return this.user.name||"".concat(this.user.first_name||""," ").concat(this.user.last_name||"")}}),created:function(){this.form=Object.assign({},this.user)},mounted:function(){console.log(this.$route)},methods:d({},Object(n.b)(["updateUser","setUser"]),{save:function(){var t=this;this.isLoading=!0,this.updateUser(this.form).then((function(e){t.setUser(e.body.data.attributes),t.$auth.user(e.body.data.attributes),t.isLoading=!1,t.isSuccess=!0,setTimeout((function(){t.isSuccess=!1}),2500)}))}})},h=(s(409),Object(c.a)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pages--my-account row mt-4 text-dark"},[s("div",{staticClass:"col-4 offset-md-2"},[s("h2",{staticClass:"h2 my-2 mb-3"},[t._v(t._s(t.$t(t.i+"my_info")))]),s("div",{staticClass:"box shadow rounded p-4"},[t.error?s("div",{staticClass:"message is-danger"},[s("div",{staticClass:"message-body"},[t._v(t._s(t.error))])]):t._e(),s("b-form-group",{staticClass:"has-text-left",attrs:{label:t.$t("auth.first_name")}},[s("b-form-input",{attrs:{id:"first_name"},model:{value:t.form.first_name,callback:function(e){t.$set(t.form,"first_name",e)},expression:"form.first_name"}})],1),s("b-form-group",{staticClass:"has-text-left",attrs:{label:t.$t("last_name")}},[s("b-form-input",{attrs:{id:"last_name"},model:{value:t.form.last_name,callback:function(e){t.$set(t.form,"last_name",e)},expression:"form.last_name"}})],1),s("div",{staticClass:"form-group has-text-left"},[s("legend",{staticClass:"label"},[t._v(t._s(t.$t("phone_number")))]),s("phone-number-verification",{model:{value:t.form.phone_number,callback:function(e){t.$set(t.form,"phone_number",e)},expression:"form.phone_number"}})],1),s("b-form-group",{staticClass:"has-text-left",attrs:{label:t.$t("auth.email")}},[s("b-form-input",{attrs:{id:"email",type:"email",size:"is-medium",placeholder:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),s("b-form-group",{staticClass:"has-text-left",attrs:{label:t.$t("new_password")}},[s("b-form-input",{attrs:{id:"password",type:"password",size:"is-medium"},model:{value:t.form.newPassword,callback:function(e){t.$set(t.form,"newPassword",e)},expression:"form.newPassword"}})],1),s("b-form-group",{staticClass:"has-text-left"},[s("b-form-checkbox",{attrs:{name:"analytics",size:"is-medium"},model:{value:t.form.has_analytics,callback:function(e){t.$set(t.form,"has_analytics",e)},expression:"form.has_analytics"}},[t._v(t._s(t.$t("help_to_improve_by_accepting_analytics")))])],1)],1),s("div",{staticClass:"text-right"},[s("b-button",{staticClass:"mt-3",class:{"is-loading":t.isLoading,"is-disabled":t.isLoading,"btn-success":t.isSuccess},attrs:{id:"btn_save_profile",size:"sm",variant:"primary"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.save(e)}}},[t.isSuccess?s("i",{staticClass:"mdi m-0"},[t._v("check")]):s("span",[t._v("Save")])])],1)]),s("div",{staticClass:"col-4"},[s("h2",{staticClass:"h2 my-2 mb-3"},[t._v(t._s(t.$t(t.i+"my_subscription")))]),s("subscriptions-list")],1)])}),[],!1,null,null,null));e.default=h.exports}}]);