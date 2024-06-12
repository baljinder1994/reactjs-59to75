import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TweetList from './TweetList';
import Navbar from './Navbar';

function Home() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch tweets from the API
    axios.get('https://api.twitter.com/2/tweets')
      .then(response => {
        setTweets(response.data);
      })
      .catch(error => console.error('Error fetching tweets:', error));
  }, []);

  return (
    <div>
      
      <h1>Home</h1>
      <TweetList tweets={tweets} />
    </div>
  );
}

export default Home;
