

import React from 'react'
import Post from './Post/Post';
import p from "./MyPosts.module.css"
import { Field, reduxForm } from "redux-form"
import { required, maxLengthCreator } from "../../../util/validators/validators.js"
import { Textarea } from '../../common/FormsControls/FormsControls';


const maxLength10 = maxLengthCreator(10)
const MyPostsForm = (props) => {

   return <div>
      <form onSubmit={props.handleSubmit} className={p.addPostForm}>
         <div>
            <Field component={Textarea} placeholder="Your Message" name='text' className={p.addPostInput} />
         </div>
         <div>
            <button className={p.addPostBtn}>Post</button>
         </div>
      </form>
   </div>
}

const MyPostsReduxForm = reduxForm({
   form: "posts"
})(MyPostsForm)

const MyPosts = React.memo(props => {

   let postsElements = props.posts.map((post, i) => <Post key={i} message={post.message} />)

   let AddPost = (text) => {
      props.addPost(text)
   }
   const handleSubmit = (inputData) => {
      AddPost(inputData.text)

   }

   return (
      <div>
         <div className={p.content_posts}>
            <h2 className={p.myPostsTitle}>My posts</h2>
            <MyPostsReduxForm onSubmit={handleSubmit} />
            <br />
            <div className={p.myPosts}>{postsElements}</div>

         </div>
      </div>
   )
})

export default MyPosts