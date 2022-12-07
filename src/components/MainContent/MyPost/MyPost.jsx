import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Posts/Post.jsx";


const MyPost = () => {
   return (
      <div>
         <div className={classes.content}>
            mairn content
         </div>
         <div>
            <textarea></textarea>
            <button>Add Post</button>
            <button>Delete</button>
         </div>
         <div>
            <Post />
            <Post />
            <Post />
         </div>
      </div>
   )
}

export default MyPost;