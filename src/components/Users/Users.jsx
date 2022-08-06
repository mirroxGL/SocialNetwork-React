import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css"
import { Navigate } from 'react-router-dom';
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User.jsx";



let Users = (props) => {

   if (!props.isAuth) {
      return <Navigate to={"/login"} />
   }
   return <div className={s.usersDiv}>
      <Paginator pageSize={props.pageSize} totalItemsCount={props.totalUsersCount} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
      <User unfollow={props.unfollow} follow={props.follow} pageSize={props.pageSize} users={props.users} totalUsersCount={props.totalUsersCount} followingInProgress={props.followingInProgress} />
   </div >
}

export default Users