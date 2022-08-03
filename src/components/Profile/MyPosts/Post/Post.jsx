import React from "react"
import p from "./Post.module.css"

const Post = (props) => {
   return (
      <div className={p.post}>
         <div className={p.post_img}><img src="https://images.assetsdelivery.com/compings_v2/triken/triken1608/triken160800029.jpg" alt="" /></div>
         <div className={p.post_content}>{props.message}</div>
         <div>Like</div>
      </div>
   )
}

export default Post