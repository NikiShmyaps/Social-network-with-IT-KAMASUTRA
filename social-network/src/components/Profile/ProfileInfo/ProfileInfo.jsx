import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <>
      <div>
        <img src="http://fsaea.org/wp-content/uploads/2013/08/whatwedo.jpg" alt="title"/>
      </div>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </>
  )
}

export default ProfileInfo;