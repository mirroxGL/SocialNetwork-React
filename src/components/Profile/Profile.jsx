
import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer"


const Profile = (props) => {

   return (
      <div>
         <ProfileInfoContainer profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
         <MyPostsContainer />
      </div>
   )
}

export default Profile