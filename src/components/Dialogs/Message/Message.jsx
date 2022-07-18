import React from "react";
import { NavLink } from "react-router-dom";
import d from "./../Dialogs.module.css"

const Message = (props) => {
   return (
      <div className={d.message}>{props.message}</div>
   )
}


export default Message