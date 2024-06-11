// ProfileHeader.js
import React from 'react';
import { Grid, Typography, Avatar } from '@mui/material';
import './style.css'; // Import the CSS file

const UserHeader = ({ user, isOwnProfile }) => {
  const placeholderImage = 'https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png';

  return (
    <Grid container justifyContent="center">
      {/* Profile Header Section */}
      <Grid item xs={12} md={8}> {/* Occupies more space on larger screens */}
        <div className="profile-header">
          <div className="profile-photo">
            <Avatar
              src={placeholderImage}
              alt="Profile"
              className="profile-avatar"
              sx={{ width: 150, height: 150 }} // Optional MUI size styling
            />
          </div>
          <div className="profile-details">
            {isOwnProfile && (
              <div className="profile-bio">
                <Typography variant="h5" component="h2" className="profile-bio-title">
                  Bio
                </Typography>
                <Typography variant="body2" component="p" className="profile-bio-text">
                  {user.bio}
                </Typography>
              </div>
            )}
            <div className="profile-details-center">
              <Typography variant="h4" component="h1" className="profile-name">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="body1" component="p" className="profile-email">
                {user.email}
              </Typography>
              {isOwnProfile && (
                <Typography variant="body1" component="p" className="profile-location">
                  Location: {user.location}
                </Typography>
              )}
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default UserHeader;
