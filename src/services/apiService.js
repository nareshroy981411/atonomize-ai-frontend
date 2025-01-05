import axios from 'axios';

const API_URL = 'http://localhost:3030/api';
export const fetchUser = (username) => axios.post(`${API_URL}/users/${username}`);
export const fetchRepos = (username) => axios.get(`https://api.github.com/users/${username}/repos`);
export const fetchFollowers = (username) => axios.get(`https://api.github.com/users/${username}/followers`);
