import ProfileInfo from "./ProfileInfo/ProfileInfo"
import React from "react"
import { addPostActionCreator } from "../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../redux/profile-reducer";


const ProfileContainer = (props) => {
   debugger
   let addPost = () => {
      props.store.dispatch(addPostActionCreator())
   }
   let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text)
      props.store.dispatch(action)
   }
   return (
      <ProfileInfo hey={1} profileData={props.store.getState().profile.ProfileData} updateNewPostText={onPostChange} addPost={addPost} posts={props.store.getState().profile.postsData} newPostText={props.store.getState().profile.newPostText} />

   )
}

export default ProfileContainer