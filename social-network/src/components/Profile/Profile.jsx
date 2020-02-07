import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';

const Profile = () => {
    return (
        <main className={classes.content}>
            <div>
                <img src="http://fsaea.org/wp-content/uploads/2013/08/whatwedo.jpg" alt="title" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>            
        </main>
    )
}

export default Profile;