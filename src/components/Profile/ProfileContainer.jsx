import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Profile from "./Profile";
import React from "react"
import { addPostActionCreator } from "../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../redux/profile-reducer";


const ProfileContainer = (props) => {
   let state = props.store.getState()
   let addPost = () => {
      props.store.dispatch(addPostActionCreator())
   }
   let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text)
      props.store.dispatch(action)
   }
   return (
      <Profile updateNewPostText={onPostChange} addPost={addPost} newPostText={state.profile.newPostText} profileData={state.profile.profileData} posts={state.profile.postsData} />
   )
}

export default ProfileContainer