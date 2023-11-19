// Profile.jsx
import React from 'react';
import './Profile.css'; 

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile-container">
      <div className="profile">
        <img src={avatar} alt="User avatar" className="avatar" />
        <h2 className="name">{username}</h2>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>

    

        <div className="stats">
          <div className="followers">
            <span className="followers_title">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </div>
          <div className="views">
            <span className="views_title">Views</span>
            <span className="quantity">{stats.views}</span>
          </div>
          <div className="likes">
            <span className="likes_title">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
