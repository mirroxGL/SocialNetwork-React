import p from "./Profile.module.css"
import Post from "./Post/Post"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import React from "react"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/profile-reducer"



const Content = (props) => {

   let addPost = () => {
      props.dispatch(addPostActionCreator())
   }
   let onPostChange = (e) => {
      let text = e.target.value
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
   }


   let postsElements = props.posts.map((post, i) => <Post key={i} message={post.message} />)

   return (
      <div>
         <ProfileInfo profileData={props.profileData} updateNewPostText={onPostChange} addPost={addPost} posts={props.posts} newPostText={props.newPostText} />
         <div className={p.content_posts}>
            <h2 className={p.myPosts}>My posts</h2>
            <form className={p.addPostForm}>
               <textarea className={p.addPostInput} value={props.newPostText} onChange={onPostChange}></textarea>
               <div>
                  <a onClick={addPost} className={p.addPostBtn}>Post</a>
               </div>
            </form>
            <br />
            {postsElements}
         </div>
      </div>
   )
}

export default Content