"use strict";(self.webpackChunkreact_ez_1=self.webpackChunkreact_ez_1||[]).push([[707],{7193:function(s,t,e){var i=e(8683),r=e(5671),n=e(3144),o=e(136),a=e(2882),u=e(2791),l=e(6871),p=e(8687),c=e(184),f=function(s){return{isAuth:s.auth.isAuth}};t.Z=function(s){var t=function(t){(0,o.Z)(u,t);var e=(0,a.Z)(u);function u(){return(0,r.Z)(this,u),e.apply(this,arguments)}return(0,n.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(s,(0,i.Z)({},this.props)):(0,c.jsx)(l.Fg,{to:"/login"})}}]),u}(u.Component);return(0,p.$j)(f,null)(t)}},1029:function(s,t,e){e.r(t),e.d(t,{default:function(){return O},withRouter:function(){return U}});var i=e(5671),r=e(3144),n=e(136),o=e(2882),a=e(8683),u=e(2791),l=e(8687),p={post:"Post_post__CT+s6",post_img:"Post_post_img__W78YB"},c=e(184),f=function(s){return(0,c.jsxs)("div",{className:p.post,children:[(0,c.jsx)("div",{className:p.post_img,children:(0,c.jsx)("img",{src:"https://images.assetsdelivery.com/compings_v2/triken/triken1608/triken160800029.jpg",alt:""})}),(0,c.jsx)("div",{className:p.post_content,children:s.message}),(0,c.jsx)("div",{children:"Like"})]})},d="MyPosts_content_posts__BM7po",_="MyPosts_addPostBtn__vlSzT",h="MyPosts_addPostInput__ri0bL",m="MyPosts_myPostsTitle__qoHDh",j="MyPosts_myPosts__ZewjP",x="MyPosts_addPostForm__8PiGK",v=e(6139),P=e(704),g=e(5760),Z=e(6856),N=((0,g.D)(10),(0,P.Z)({form:"posts"})((function(s){return(0,c.jsx)("div",{children:(0,c.jsxs)("form",{onSubmit:s.handleSubmit,className:x,children:[(0,c.jsx)("div",{children:(0,c.jsx)(v.Z,{component:Z.g,placeholder:"Your Message",name:"text",className:h})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:_,children:"Post"})})]})})}))),y=u.memo((function(s){var t=s.posts.map((function(t,e){return(0,c.jsx)(f,{message:t.message,likesCount:s.likesCount,likePost:s.likePost},e)}));return(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:d,children:[(0,c.jsx)("h2",{className:m,children:"My posts"}),(0,c.jsx)(N,{onSubmit:function(t){var e;e=t.text,s.addPost(e)}}),(0,c.jsx)("br",{}),(0,c.jsx)("div",{className:j,children:t})]})})})),k=e(6070),S=e(2381),b=(0,l.$j)((function(s){return{profileData:s.profile.profileData,posts:s.profile.postsData}}),(function(s){return{addPost:function(t){s((0,k.Wl)(t)),s((0,S.mc)("posts"))}}}))(y),I=e(8708),C={},D=(u.Component,e(885)),M=function(s){var t=(0,u.useState)(!1),e=(0,D.Z)(t,2),i=e[0],r=e[1],n=(0,u.useState)(s.status),o=(0,D.Z)(n,2),a=o[0],l=o[1];(0,u.useEffect)((function(){l(s.status)}),[s.status]);return(0,c.jsxs)("div",{className:C.status,children:[i&&(0,c.jsx)("div",{onBlur:function(){r(!1),s.updateStatus(a)},className:C.status_input,children:(0,c.jsx)("input",{onChange:function(s){l(s.currentTarget.value)},value:a,autoFocus:!0,type:"text"})}),!i&&(0,c.jsx)("div",{onDoubleClick:function(){r(!0)},className:C.status_text,children:(0,c.jsx)("span",{children:s.status||"------"})})]})},A={profile_banner__img:"ProfileInfo_profile_banner__img__XgpPZ",profile:"ProfileInfo_profile__IpKHk",profile__img:"ProfileInfo_profile__img__O14XL",profile_info__name:"ProfileInfo_profile_info__name__r61k9",profile_info:"ProfileInfo_profile_info__3udvm",profile_info__description:"ProfileInfo_profile_info__description__C7dLO"},w=function(s){var t=s.profileData;return s.profile?(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:A.profile,children:[(0,c.jsx)("div",{className:A.profile__img,children:(0,c.jsx)("img",{src:s.profile.photos.large?s.profile.photos.large:"https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg",alt:""})}),(0,c.jsxs)("div",{className:A.profile_info,children:[(0,c.jsx)("div",{className:A.profile_info__name,children:s.profile.fullName}),(0,c.jsx)(M,{status:s.status,updateStatus:s.updateStatus,userId:s.profile.userId}),(0,c.jsxs)("div",{className:A.profile_info__description,children:[(0,c.jsxs)("p",{children:["Date of Birth: ",t[1].birthday]}),(0,c.jsxs)("p",{children:["City: ",t[2].city]}),(0,c.jsxs)("p",{children:["Education: ",t[3].education]})]})]})]})}):(0,c.jsx)(I.Z,{className:A.preloader})},z=(0,l.$j)((function(s){return{profileData:s.profile.profileData,profile:s.profile.profile}}),(function(s){return{}}))(w),B=function(s){return(0,c.jsxs)("div",{children:[(0,c.jsx)(z,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,c.jsx)(b,{})]})},$=e(7193),L=e(6871),T=e(7781);function U(s){return function(t){var e={params:(0,L.UO)()};return(0,c.jsx)(s,(0,a.Z)((0,a.Z)({},t),{},{match:e}))}}var F=function(s){(0,n.Z)(e,s);var t=(0,o.Z)(e);function e(){return(0,i.Z)(this,e),t.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.match.params.userId;s||this.props.isAuth&&(s=this.props.authorizedUserId),this.props.setProfile(s),this.props.getStatus(s)}},{key:"render",value:function(){return(0,c.jsx)(B,(0,a.Z)((0,a.Z)({},this.props),{},{status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(u.Component),O=(0,T.qC)((0,l.$j)((function(s){return{status:s.profile.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{setUserProfile:k.$l,setProfile:k.cJ,getStatus:k.xD,updateStatus:k.NN}),U,$.Z)(F)}}]);
//# sourceMappingURL=707.18839e92.chunk.js.map