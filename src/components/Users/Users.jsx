import React from "react";
import s from "./Users.module.css"


let Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);

   }


   return <div>
      <div className={s.pagination}>
         {pages.map(p => {
            return <span onClick={() => { props.onPageChanged(p) }} className={(props.currentPage === p && s.selectedPage).toString()}><span className={s.paginationNumber}>{p}</span></span>
         })}
      </div>
      {
         props.users.map(u =>
            <div className={s.userItem}>
               <div className={s.userItem_block}>
                  <div className={s.userItem_avatar}>
                     <img className={s.userItem_avatarImg} src={u.photos.small != null ? u.photos.small : "https://cdn-icons-png.flaticon.com/512/146/146035.png"} alt="" />
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
                     ? <a className={s.followBtn} onClick={() => { props.unfollow(u.id) }} >Unfollow</a>
                     : <a className={s.followBtn} onClick={() => { props.follow(u.id) }} >Follow</a>

               }
            </div>
         )
      }
   </div>
}

export default Users