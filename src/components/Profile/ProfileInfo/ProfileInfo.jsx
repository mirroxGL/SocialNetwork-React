import Preloader from "../../common/Preloader/Preloader"
import MyProfileInfoStatus from "./MyProfileInfo/MyProfileInfoStatus/MyProfileInfoStatus"
import ProfileStatusWithHooks from "./MyProfileInfo/MyProfileInfoStatus/ProfileStatusWithHooks"
import p from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
   let profileData = props.profileData

   if (!props.profile) {
      return <Preloader className={p.preloader} />
   }
   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         props.savePhoto(e.target.files[0])
      }

   }
   return (
      <div>
         <div className={p.profile}>

            <div>
               <div className={p.profile__img}><img src={props.profile.photos.large || "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"} alt="" /></div>

               <div className={p.uploadAvatarBlock}>{props.isOwner ? <input className={p.uploadAvatar} type="file" id="file" onChange={onMainPhotoSelected} /> : ""}
                  <label className={p.uploadAvatarLabel} htmlFor="file" >Choose a file</label>
               </div>

            </div>

            <div className={p.profile_info}>
               <div className={p.profile_info__name}>{props.profile.fullName}</div>
               <ProfileStatusWithHooks isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus} userId={props.profile.userId} />
               {props.isOwner && <div className={p.profile_info__description}>
                  <p>Date of Birth: {profileData[1].birthday}</p>
                  <p>City: {profileData[2].city}</p>
                  <p>Education: {profileData[3].education}</p>
               </div>}

            </div>
         </div>
      </div >
   )
}


export default ProfileInfo