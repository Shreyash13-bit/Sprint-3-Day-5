import React from 'react';
import './UserCard.css';
const UserProfile = ({ name, email, avatarUrl, bio }) => {
  return (
    <div className="user-card">
      <img
        src={avatarUrl}
        alt="Avatar"
        className="user-avatar"
      />
      <div className="user-info">
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};
UserProfile.defaultProps = {
  name: 'Shreyash',
  email: 'shreyashroy1324@gmail.com',
  avatarUrl: 'https://via.placeholder.com/100',
  bio: 'No bio available.'
};
export default UserProfile;
