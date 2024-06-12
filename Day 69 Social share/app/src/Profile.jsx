import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TweetList from './TweetList';
import Navbar from './Navbar';

function Profile() {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch user profile and tweets from the API
    axios.get(`https://api.twitter.com/2/users/by/username/${username}`)
      .then(response => {
        setProfile(response.data);
        return axios.get(`https://api.twitter.com/2/tweets?username=${username}`);
      })
      .then(response => {
        setTweets(response.data);
      })
      .catch(error => console.error('Error fetching profile or tweets:', error));
  }, [username]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <h1>{profile.name}'s Profile</h1>
      <TweetList tweets={tweets} />
    </div>
  );
}

export default Profile;
