import React from 'react';

const UserInfo = ({ userData }) => (
  <div className="user-card">
    <div className="user-content">
      <img
        src={userData.avatar_url}
        alt="Avatar"
        className="user-avatar"
      />
      <div className="user-details">
        <h2>Username: {userData.username}</h2>
        <p><strong>Location:</strong> {userData.location ? userData.location : 'N/A'}</p>
        <p><strong>Public Repos:</strong> {userData.public_repos}</p>
        <p><strong>Followers:</strong> {userData.followers}</p>
        <p><strong>Following:</strong> {userData.following}</p>
      </div>
    </div>
  </div>
);

export default UserInfo;
