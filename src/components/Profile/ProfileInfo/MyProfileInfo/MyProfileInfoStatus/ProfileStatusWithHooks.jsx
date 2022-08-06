import React, { useEffect, useState } from "react";
import { setStatus } from "../../../../../redux/profile-reducer";
import s from "./MyProfileInfoStatus.module.css"



const ProfileStatusWithHooks = (props) => {
   let stateWithHooks = useState(false)

   let [editMode, setEditMode] = stateWithHooks
   let [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   let activateEditMode = () => {
      if (props.isOwner) {
         setEditMode(true)
      }

   }
   let deactivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
   }

   let onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }

   return <div className={s.status}>
      {editMode &&
         <div onBlur={deactivateEditMode} className={s.status_input}>
            <input onChange={onStatusChange} value={status} autoFocus={true} type="text" />

         </div>}
      {!editMode &&
         <div onDoubleClick={activateEditMode} className={s.status_text}><span>{props.status || "------"}</span></div>}

   </div>

}

export default ProfileStatusWithHooks