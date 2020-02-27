import React from 'react';
// import classes from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    // let posts = [
    //     {id:1, post: "Hi, how are you?", likeCount: 12},
    //     {id:2, post: "It's my first post.", likeCount: 1}
    // ];

    return (
        <main >
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>            
        </main>
    )
}

export default Profile;