"use strict";(self["webpackChunkvueproject"]=self["webpackChunkvueproject"]||[]).push([[350],{1350:function(s,e,r){r.r(e),r.d(e,{default:function(){return c}});var a=function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("v-container",{staticClass:"mt-16"},[r("v-card",{staticClass:"pa-10"},[r("form",{on:{submit:function(e){return e.preventDefault(),s.fnRegisterUser.apply(null,arguments)}}},[r("v-text-field",{attrs:{label:"nickname",required:""},model:{value:s.nickname,callback:function(e){s.nickname=e},expression:"nickname"}}),r("v-text-field",{attrs:{label:"email",required:""},model:{value:s.sEmail,callback:function(e){s.sEmail=e},expression:"sEmail"}}),r("v-text-field",{attrs:{label:"password",type:"password",required:""},model:{value:s.sPassword,callback:function(e){s.sPassword=e},expression:"sPassword"}}),r("v-text-field",{attrs:{label:"password check",type:"password",required:"",rules:[s.fnComparePassword]},model:{value:s.sConfirmPassword,callback:function(e){s.sConfirmPassword=e},expression:"sConfirmPassword"}}),r("v-spacer"),r("v-card-actions",[r("v-btn",{on:{click:s.fnRegisterUser}},[s._v("회원가입")]),r("v-btn",{on:{click:function(e){return s.$router.go(-1)}}},[s._v("취소")])],1)],1)])],1)},t=[],n={name:"LoginView",data:()=>({nickname:"",sEmail:"",sPassword:"",sConfirmPassword:""}),computed:{fnComparePassword(){return this.sPassword==this.sConfirmPassword||"비밀번호가 일치하지 않습니다"}},methods:{fnRegisterUser(){this.$store.dispatch("fnRegisterUser",{pEmail:this.sEmail,pPassword:this.sPassword}),this.$store.commit("fnSetNickname",this.nickname)}}},i=n,o=r(1001),l=(0,o.Z)(i,a,t,!1,null,null,null),c=l.exports}}]);
//# sourceMappingURL=350-legacy.9d8f08ab.js.map