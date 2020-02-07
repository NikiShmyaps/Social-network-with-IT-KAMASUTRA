import React from 'react';
import classes from './Post.module.css';

const MyPosts = () => {
  return (
    <div className={classes.item}>
      <img src="https://pp.userapi.com/c304305/u174204464/d_abf842b5.jpg?ava=1" alt="avatar"/>
      post one
      <div>
        <span>Like</span>
      </div>
    </div>

  )
}

export default MyPosts;