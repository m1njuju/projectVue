"use strict";(self["webpackChunkvueproject"]=self["webpackChunkvueproject"]||[]).push([[534],{2534:function(s,t,e){e.r(t),e.d(t,{default:function(){return c}});var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("v-container",{staticClass:"mt-16"},[e("v-card",{staticClass:"pa-10"},[e("v-text-field",{attrs:{label:"email"},model:{value:s.sEmail,callback:function(t){s.sEmail=t},expression:"sEmail"}}),e("v-text-field",{attrs:{label:"password",type:"password"},model:{value:s.sPassword,callback:function(t){s.sPassword=t},expression:"sPassword"}}),e("v-spacer"),e("v-card-actions",[e("v-btn",{on:{click:s.fnDoLogin}},[s._v("로그인")]),e("v-btn",{on:{click:function(t){return s.$router.go(-1)}}},[s._v("취소")]),e("v-spacer"),e("v-btn",{on:{click:function(t){return s.$router.push("/register")}}},[s._v("회원가입")])],1)],1)],1)},n=[],r={name:"LoginView",data:()=>({sEmail:"",sPassword:""}),methods:{fnDoLogin(){this.$store.dispatch("fnDoLogin",{pEmail:this.sEmail,pPassword:this.sPassword})}}},o=r,i=e(1001),l=(0,i.Z)(o,a,n,!1,null,null,null),c=l.exports}}]);
//# sourceMappingURL=534.f585893d.js.map