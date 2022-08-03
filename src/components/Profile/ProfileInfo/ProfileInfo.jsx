import Preloader from "../../common/Preloader/Preloader"
import MyProfileInfoStatus from "./MyProfileInfo/MyProfileInfoStatus/MyProfileInfoStatus"
import ProfileStatusWithHooks from "./MyProfileInfo/MyProfileInfoStatus/ProfileStatusWithHooks"
import p from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
   let profileData = props.profileData

   if (!props.profile) {
      return <Preloader className={p.preloader} />
   }

   return (
      <div>
         <div className={p.profile}>
            <div className={p.profile__img}><img src={props.profile.photos.large ? props.profile.photos.large : "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"} alt="" /></div>
            <div className={p.profile_info}>
               <div className={p.profile_info__name}>{props.profile.fullName}</div>
               <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} userId={props.profile.userId} />
               <div className={p.profile_info__description}>
                  <p>Date of Birth: {profileData[1].birthday}</p>
                  <p>City: {profileData[2].city}</p>
                  <p>Education: {profileData[3].education}</p>
               </div>
            </div>
         </div>
      </div>
   )
}


export default ProfileInfo