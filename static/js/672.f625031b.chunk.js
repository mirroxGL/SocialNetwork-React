"use strict";(self.webpackChunkreact_ez_1=self.webpackChunkreact_ez_1||[]).push([[672],{7193:function(s,e,n){var a=n(8683),i=n(5671),t=n(3144),o=n(136),r=n(2882),l=n(2791),u=n(6871),c=n(8687),d=n(184),g=function(s){return{isAuth:s.auth.isAuth}};e.Z=function(s){var e=function(e){(0,o.Z)(l,e);var n=(0,r.Z)(l);function l(){return(0,i.Z)(this,l),n.apply(this,arguments)}return(0,t.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(s,(0,a.Z)({},this.props)):(0,d.jsx)(u.Fg,{to:"/login"})}}]),l}(l.Component);return(0,c.$j)(g,null)(e)}},5672:function(s,e,n){n.r(e),n.d(e,{default:function(){return k}});var a=n(2807),i=(n(2791),"Dialogs_dialogs__SWpC5"),t="Dialogs_dialogsItems__ZZcGG",o="Dialogs_dialog__bEX6g",r="Dialogs_messages__NG53o",l="Dialogs_message__IT05v",u="Dialogs_textInput__bZSxe",c="Dialogs_sendMessageBtn__Mc2va",d="Dialogs_sendMessageForm__HZt1m",g=n(3504),m=n(184),_=function(s){return(0,m.jsx)("div",{className:o,children:(0,m.jsx)(g.OL,{to:"/dialogs/"+s.id,children:s.name})})},h=function(s){return(0,m.jsx)("div",{className:l,children:s.message})},f=n(6871),x=n(6139),j=n(704),v=n(6856),p=n(5760),Z=(0,p.D)(50),D=(0,j.Z)({form:"dialogsForm"})((function(s){return(0,m.jsx)("div",{children:(0,m.jsxs)("form",{onSubmit:s.handleSubmit,className:d,children:[(0,m.jsx)(x.Z,{validate:[p.C,Z],placeholder:"Your message...",name:"message",component:v.g,className:u}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{className:c,children:"Send"})})]})})})),N=function(s){var e=s.dialogs.map((function(s,e){return(0,m.jsx)(_,{name:s.name,id:s.id},e)})),n=s.messages.map((function(s,e){return(0,m.jsx)(h,{message:s.message},e)}));return s.isAuth?(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("div",{className:t,children:e}),(0,m.jsx)("div",{className:r,children:n})]}),(0,m.jsx)(D,{onSubmit:function(e){var n;n=e.message,s.sendMessage(n)}})]}):(0,m.jsx)(f.Fg,{to:"/login"})},b=n(7193),M=n(8687),C=n(7781),S=n(2381),k=(0,C.qC)((0,M.$j)((function(s){return{newMessageText:s.dialogs.newMessageText,dialogs:s.dialogs.dialogsData,messages:s.dialogs.messagesData}}),(function(s){return{sendMessage:function(e){s((0,a.$h)(e)),s((0,S.mc)("dialogsForm"))}}})),b.Z)(N)}}]);
//# sourceMappingURL=672.f625031b.chunk.js.map