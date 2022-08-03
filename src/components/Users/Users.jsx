import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css"
import { Navigate } from 'react-router-dom';



let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);

   }

   if (!props.isAuth) {
      return <Navigate to={"/login"} />
   }
   return <div className={s.usersBlock}>
      <div className={s.pagination}>
         {pages.map(p => {
            return <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p ? s.selectedPage : ""}><span className={s.paginationNumber}>{p}</span></span>
         })}
      </div>
      {
         props.users.map(u =>
            <div className={s.userItem}>
               <div className={s.userItem_block}>
                  <div className={s.userItem_avatar}>
                     <NavLink to={"/profile/" + u.id}>
                        <img className={s.userItem_avatarImg} src={u.photos.small != null ? u.photos.small : "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"} alt="" />
                     </NavLink>
                  </div>
                  <div>

                  </div>
                  <div className={s.userItem_info}>
                     <div className={s.userItem_left}>
                        <div className={s.userItem_name}>{u.name}</div>
                        <div className={s.userItem_status}>{u.status}</div>
                     </div>
                     <div className={s.userItem_right}>
                        {/* <div className={s.userItem_country}>{u.location.country}</div>
               <div className={s.userItem_city}>{u.location.city}</div> */}
                     </div>
                  </div>
               </div>
               {
                  u.followed
                     ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followBtn} onClick={() => {
                        props.unfollow(u)
                     }} >Unfollow</button>

                     : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followBtn} onClick={() => {
                        props.follow(u)
                     }} >Follow</button>

               }
            </div>
         )
      }
   </div >
}

export default Users