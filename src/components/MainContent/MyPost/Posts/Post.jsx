import React from "react";
import classes from './Posts.module.css';


const Post = () => {
   return (
      <div>
         <div>
            <div className={classes.item}>
               <img className={classes.image__avatar} src="https://i.pinimg.com/474x/9f/92/5d/9f925d8a02ffd26461b9c89d6c7dbc56.jpg" alt="avatar" />
               <p>post1</p>
               <div>
                  <span className={classes.like}>Like</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Post;