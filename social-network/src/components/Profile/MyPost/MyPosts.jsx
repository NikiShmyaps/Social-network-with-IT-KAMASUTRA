import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map (
    post => <Post message={post.message} likeCount={post.likeCount} id={post.id}/>
	);
	
	let newPostElement = React.createRef();
	
	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		
	}

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
					<textarea ref={newPostElement}></textarea>
				</div>
        <div>
					<button onClick = {addPost} >New post</button>
				</div>
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  )
}

export default MyPosts;