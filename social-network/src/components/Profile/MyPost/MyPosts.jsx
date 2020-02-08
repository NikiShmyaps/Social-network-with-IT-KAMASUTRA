import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <div>New post</div>
        <div className={classes.posts}>
          <Post message="Hi, how are you?" likeCount="15"/>
          <Post message="It's my first post." likeCount="5"/>
        </div>
      </div>
    </div>
  )
}

export default MyPosts;