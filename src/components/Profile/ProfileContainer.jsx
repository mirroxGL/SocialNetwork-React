import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Profile from "./Profile";
import React from "react"
import MyPosts from "./Post/Post";
import { addPostActionCreator } from "../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../redux/profile-reducer";
import StoreContext from "../../StoreContext";
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
   return {
      newPostText: state.profile.newPostText,
      profileData: state.profile.profileData,
      posts: state.profile.postsData
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         let action = updateNewPostTextActionCreator(text)
         dispatch(action)

      },
      addPost: () => {
         dispatch(addPostActionCreator())
      }
   }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer