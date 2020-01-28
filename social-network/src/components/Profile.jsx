import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <main className={classes.content}>
            <div>
                <img src="http://fsaea.org/wp-content/uploads/2013/08/whatwedo.jpg" alt="title" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                Posts
                <div>
                    <div className={classes.item}>
                        post one
                    </div>
                    <div className={classes.item}>
                        post two
                    </div>
                    <div className={classes.item}>
                        post three
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Profile;