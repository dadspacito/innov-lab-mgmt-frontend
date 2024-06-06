// PreferencesSection.js
import React from 'react';

const UserPreferences = ({ user }) => {
  return (
    <div className="preferences-section">
      <h2>Preferences</h2>
      <p>Skills: {user.skills.join(', ')}</p>
      <p>Interests: {user.interests.join(', ')}</p>
      <label>
        <input type="checkbox" checked={user.private} readOnly />
        Private Profile
      </label>
    </div>
  );
};

export default UserPreferences;