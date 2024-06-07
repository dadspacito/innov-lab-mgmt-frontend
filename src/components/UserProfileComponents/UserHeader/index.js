// ProfileHeader.js
import React from 'react';

const ProfileHeader = ({ user, isOwnProfile }) => {
  return (
    <div className="profile-header">
      <div className="profile-photo">
        <img src={user.photo} alt="Profile" />
      </div>
      <div className="profile-details">
        <h1>{user.firstName} {user.lastName}</h1>
        <p>{user.email}</p>
        {isOwnProfile && <p>Location: {user.location}</p>}
      </div>
      {isOwnProfile && (
        <div className="profile-bio">
          <h2>Bio</h2>
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;