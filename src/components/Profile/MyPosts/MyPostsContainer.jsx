import MyPosts from "./MyPosts.jsx";
import { addPostActionCreator, likePost, resetMessageActionCreator } from "../../../redux/profile-reducer.js";
import { connect } from 'react-redux'
import { reset } from 'redux-form';


let mapStateToProps = (state) => {
   return {
      profileData: state.profile.profileData,
      posts: state.profile.postsData
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: (text) => {
         dispatch(addPostActionCreator(text))
         dispatch(reset('posts'))

      },
      // likePost: (messageId) => {
      //    dispatch(likePost(messageId))
      // }

   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer