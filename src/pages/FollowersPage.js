import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchFollowers } from '../services/apiService';
import './FollowersPage.css';

const FollowersPage = () => {
  const { username } = useParams();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowerList = async () => {
      try {
        const response = await fetchFollowers(username);
        setFollowers(response.data);
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };
    fetchFollowerList();
  }, [username]);

  return (
    <div className="followers-page">
      <h1>Followers of {username}</h1>
<div className="follower-grid">
      {followers.map((follower) => (
        <div key={follower.id} className="follower-item">
          <img 
            src={follower.avatar_url} 
            alt={`${follower.login}'s avatar`}   
            className="follower-avatar"
          />
          <Link to={`/followers/${follower.login}`} className="follower-link">
              {follower.login}
            </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FollowersPage;
