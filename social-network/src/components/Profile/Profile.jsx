import React from 'react';
// import classes from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = () => {
    return (
        <main >
            <ProfileInfo/>
            <MyPosts/>            
        </main>
    )
}

export default Profile;