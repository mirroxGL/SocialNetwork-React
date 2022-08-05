import React from 'react'
import s from "../Users.module.css"
import { NavLink } from "react-router-dom";

const User = (props) => {

   return (
      <div>
         {props.users.map(u =>
            <div className={s.userItem}>
               <div className={s.userItem_block}>
                  <div className={s.userItem_avatar}>
                     <NavLink to={"/profile/" + u.id}>
                        <img className={s.userItem_avatarImg} src={u.photos.small != null ? u.photos.small : "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"} alt="" />
                     </NavLink>
                  </div>
                  <div className={s.userItem_info}>
                     <div className={s.userItem_left}>
                        <div className={s.userItem_name}>{u.name}</div>
                        <div className={s.userItem_status}>{u.status}</div>
                     </div>
                     <div className={s.userItem_right}>
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
      </div>
   )
}

export default User