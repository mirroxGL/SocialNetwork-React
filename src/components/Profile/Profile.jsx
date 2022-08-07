
import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {

   return (
      <div>
         <ProfileInfo savePhoto={props.savePhoto}
            isOwner={props.isOwner}
            status={props.status}
            updateStatus={props.updateStatus}
            saveProfile={props.saveProfile}
            profile={props.profile} />
         <MyPostsContainer isOwner={props.isOwner} />
      </div>
   )
}

export default Profile