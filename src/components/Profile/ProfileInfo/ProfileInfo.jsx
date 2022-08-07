import { useState } from "react"
import Preloader from "../../common/Preloader/Preloader"
import MyProfileInfoStatus from "./MyProfileInfo/MyProfileInfoStatus/MyProfileInfoStatus"
import ProfileStatusWithHooks from "./MyProfileInfo/MyProfileInfoStatus/ProfileStatusWithHooks"
import ProfileDataForm from "./ProfileDataForm"
import p from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
   let [editMode, setEditMode] = useState(false)
   let profileData = props.profileData

   if (!props.profile) {
      return <Preloader className={p.preloader} />
   }
   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         props.savePhoto(e.target.files[0])
      }


   }

   const onSubmit = (formData) => {
      console.log(formData);
      props.saveProfile(formData)
      setEditMode(false)
   }
   return (
      <div>
         <div className={p.profile}>

            <div className={p.avatarBlock}>
               <div className={p.profile__img}><img src={props.profile.photos.large || "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"} alt="" /></div>

               <div className={p.uploadAvatarBlock}>{props.isOwner ? <input className={p.uploadAvatar} type="file" id="file" onChange={onMainPhotoSelected} />
                  : ""}
                  {props.isOwner ? <label className={p.uploadAvatarLabel} htmlFor="file" >Choose a file</label> : ""}

               </div>

            </div>

            {!editMode
               ? <ProfileData goToEditMode={() => setEditMode(true)} {...props} />
               : <ProfileDataForm initialValues={props.profile} {...props} onSubmit={onSubmit} setEditMode={setEditMode} />}

         </div>
      </div>

   )
}

const ProfileData = (props) => {


   return <div className={p.profileInfoBlock}>
      <div className={p.profile_info}>
         <div className={p.editNameFlex}>
            <p className={p.profile_info__name}>{props.profile.fullName}</p>
            {props.isOwner && <button className={p.editInfoBtn} onClick={props.goToEditMode}>Edit</button>}


         </div>
         <div><b>Status:</b><ProfileStatusWithHooks isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus} userId={props.profile.userId} /></div>
         <div className={p.additionlaInfo_item}>
            <b>Looking for a job:</b>{props.profile.lookingForAJob ? " yes" : " no"}
         </div>
         <div className={p.additionlaInfo_item}><b>My professional skills:</b> {props.profile.lookingForAJobDescription}</div>

         <div className={p.additionlaInfo_item}><b>About Me:</b> {props.profile.aboutMe}</div>



         {/* <b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />

         })} */}
      </div>

   </div>
}



export const Contact = ({ contactTitle, contactValue }) => {
   return <div className={p.contacts_item} ><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo