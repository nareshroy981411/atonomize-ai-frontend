import axios from "axios";
import React, { useState } from "react";
import { fetchUser, fetchRepos } from "../services/apiService";
import { Link } from "react-router-dom";
import "./HomePage.css";

const API_URL = "http://localhost:3030/api";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const handleSearch = async () => {
    try {
      const userResponse = await fetchUser(username);
      setUserData(userResponse.data.data);
      console.log(userResponse.data.data);

      const repoResponse = await fetchRepos(username);
      setRepositories(repoResponse.data);
      console.log(userResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API_URL}/users/${username}`);
      alert(response.data.message);
      setUserData(null);
      setRepositories([]);
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user.");
    }
  };

  return (
    <>
      <div className="homepage">
        <h1>GitHub User Search</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
        {userData && (
          <div className="user-card">
            <div className="user-content">
              <img
                src={userData.avatar_url}
                alt="Avatar"
                className="user-avatar"
              />
              <div className="user-details">
                <h2>Username: {userData.username}</h2>
                <p>Public Repos: {userData.public_repos}</p>
                <p>Followers: {userData.followers}</p>
                <p>Following: {userData.following}</p>
                <Link to={`/followers/${username}`} className="link-button">
                  View Followers
                </Link>
                <button onClick={handleDelete} className="delete-button">
                  Delete User
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="repositories">
        <h2>Repositories</h2>
        <div className="repo-grid">
          {repositories.map((repo) => (
            <div key={repo.id} className="repo-card">
              <h3>{repo.name}</h3>
              <Link to={`/repository/${repo.name}`} className="link-button">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
