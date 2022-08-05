"use strict";(self.webpackChunkreact_ez_1=self.webpackChunkreact_ez_1||[]).push([[860],{7193:function(e,s,r){var t=r(8683),n=r(5671),o=r(3144),i=r(136),a=r(2882),u=r(2791),l=r(6871),c=r(8687),g=r(184),p=function(e){return{isAuth:e.auth.isAuth}};s.Z=function(e){var s=function(s){(0,i.Z)(u,s);var r=(0,a.Z)(u);function u(){return(0,n.Z)(this,u),r.apply(this,arguments)}return(0,o.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,g.jsx)(e,(0,t.Z)({},this.props)):(0,g.jsx)(l.Fg,{to:"/login"})}}]),u}(u.Component);return(0,c.$j)(p,null)(s)}},7860:function(e,s,r){r.r(s),r.d(s,{UsersContainer:function(){return k},default:function(){return z}});var t=r(5671),n=r(3144),o=r(136),i=r(2882),a=r(2791),u=r(8687),l=r(8076),c={usersBlock:"Users_usersBlock__UHGCt",usersDiv:"Users_usersDiv__Zn-UT",userItem:"Users_userItem__nfmnj",userItem_block:"Users_userItem_block__ul-eQ",userItem_info:"Users_userItem_info__VseRx",userItem_left:"Users_userItem_left__zlcrQ",userItem_right:"Users_userItem_right__VD8s5",followBtn:"Users_followBtn__bXJYu",userItem_avatarImg:"Users_userItem_avatarImg__vbB2u",userItem_name:"Users_userItem_name__YMgWR",userItem_country:"Users_userItem_country__+Nb7N",userItem_city:"Users_userItem_city__EhUDK"},g=r(6871),p=r(885),_={selectedPage:"Paginator_selectedPage__uor2+",pagination:"Paginator_pagination__rsxX6",paginationNumber:"Paginator_paginationNumber__xKHJf",paginatorBtn:"Paginator_paginatorBtn__gg+yN"},f=r(184),m=function(e,s){for(var r=s.portionSize,t=void 0===r?5:r,n=Math.ceil(e.totalItemsCount/e.pageSize),o=[],i=1;i<=n;i++)o.push(i);var u=Math.ceil(n/t),l=(0,a.useState)(1),c=(0,p.Z)(l,2),g=c[0],m=c[1],h=(g-1)*t+1,d=g*t;return(0,f.jsx)("div",{children:(0,f.jsx)("div",{className:_.usersBlock,children:(0,f.jsxs)("div",{className:_.pagination,children:[h>1&&(0,f.jsx)("button",{className:_.paginatorBtn,onClick:function(){m(g-1)},children:"Prev"}),o.filter((function(e){return e>=h&&e<=d})).map((function(s){return(0,f.jsx)("span",{onClick:function(){e.onPageChanged(s)},className:e.currentPage===s?_.selectedPage:"",children:(0,f.jsx)("span",{className:_.paginationNumber,children:s})})})),d<u&&(0,f.jsx)("button",{className:_.paginatorBtn,onClick:function(){m(g+1)},children:"Next"})]})})})},h=r(3504),d=function(e){return(0,f.jsx)("div",{children:e.users.map((function(s){return(0,f.jsxs)("div",{className:c.userItem,children:[(0,f.jsxs)("div",{className:c.userItem_block,children:[(0,f.jsx)("div",{className:c.userItem_avatar,children:(0,f.jsx)(h.OL,{to:"/profile/"+s.id,children:(0,f.jsx)("img",{className:c.userItem_avatarImg,src:null!=s.photos.small?s.photos.small:"https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg",alt:""})})}),(0,f.jsxs)("div",{className:c.userItem_info,children:[(0,f.jsxs)("div",{className:c.userItem_left,children:[(0,f.jsx)("div",{className:c.userItem_name,children:s.name}),(0,f.jsx)("div",{className:c.userItem_status,children:s.status})]}),(0,f.jsx)("div",{className:c.userItem_right})]})]}),s.followed?(0,f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===s.id})),className:c.followBtn,onClick:function(){e.unfollow(s)},children:"Unfollow"}):(0,f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===s.id})),className:c.followBtn,onClick:function(){e.follow(s)},children:"Follow"})]})}))})},I=function(e){return e.isAuth?(0,f.jsxs)("div",{className:c.usersDiv,children:[(0,f.jsx)(m,{pageSize:e.pageSize,totalItemsCount:e.totalUsersCount,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),(0,f.jsx)(d,{pageSize:e.pageSize,users:e.users,totalUsersCount:e.totalUsersCount,followingInProgress:e.followingInProgress})]}):(0,f.jsx)(g.Fg,{to:"/login"})},P=r(8708),v=r(7193),x=r(7781),j=function(e){return e.usersPage.users},C=function(e){return e.usersPage.pageSize},w=function(e){return e.usersPage.totalUsersCount},U=function(e){return e.usersPage.currentPage},N=function(e){return e.usersPage.isFetching},b=function(e){return e.usersPage.followingInProgress},k=function(e){(0,o.Z)(r,e);var s=(0,i.Z)(r);function r(){var e;(0,t.Z)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=s.call.apply(s,[this].concat(o))).onPageChanged=function(s){e.props.requestUsers(s,e.props.pageSize),e.props.setCurrentPage(s)},e}return(0,n.Z)(r,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,f.jsxs)(f.Fragment,{children:[this.props.isFetching?(0,f.jsx)(P.Z,{}):null,(0,f.jsx)(I,{onPageChanged:this.onPageChanged,pageSize:this.props.pageSize,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,toggleFollowingInProgress:this.props.toggleFollowingInProgress,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth,setCurrentPage:this.props.setCurrentPage,setUsers:this.props.setUsers})]})}}]),r}(a.Component),z=(0,x.qC)(v.Z,(0,u.$j)((function(e){return{users:j(e),pageSize:C(e),totalUsersCount:w(e),currentPage:U(e),isFetching:N(e),followingInProgress:b(e)}}),{unfollow:l.Ow,follow:l.AC,setCurrentPage:l.Io,requestUsers:l.Zx,setUsers:l.fv}))(k)}}]);
//# sourceMappingURL=860.63a29971.chunk.js.map