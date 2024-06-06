// UserProfile.js
import React from 'react';
import ProfileHeader from './ProfileHeader';
import PreferencesSection from './PreferencesSection';
import ProjectsSection from './ProjectsSection';

const UserHeader = ({ user, projects }) => {
  return (
    <div className="user-profile">
      <ProfileHeader user={user} />
      <PreferencesSection user={user} />
      <ProjectsSection userProjects={user.projects} projects={projects} />
    </div>
  );
};

export default UserHeader;