import axios from 'axios';

const API_URL = 'https://api.twitter.com/2';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`,
  },
});

export const fetchTweets = () => api.get('/tweets');
export const fetchUserProfile = (username) => api.get(`/users/by/username/${username}`);
export const fetchUserTweets = (username) => api.get(`/tweets?username=${username}`);
export const loginUser = (credentials) => api.post('/oauth2/token', credentials);
