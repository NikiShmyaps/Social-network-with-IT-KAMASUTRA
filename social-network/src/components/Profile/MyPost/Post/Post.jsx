import React from 'react';
import classes from './Post.module.css';

const MyPosts = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://pp.userapi.com/c304305/u174204464/d_abf842b5.jpg?ava=1" alt="avatar"/>
      {props.message}
      <div>
      <span>Like </span> {props.likeCount}
      </div>
    </div>
  )
}

export default MyPosts;