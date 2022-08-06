
import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer"


const Profile = (props) => {

   return (
      <div>
         <ProfileInfoContainer savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
         <MyPostsContainer isOwner={props.isOwner} />
      </div>
   )
}

export default Profile