import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TwitterDataFetcher = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json', {
          params: {
            screen_name: 'TwitterUsername', // Replace with the Twitter username you want to fetch tweets from
            count: 10, // Number of tweets to fetch
          },
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`,
          },
        });
        setTweets(response.data);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div>
      <h1>Tweets</h1>
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TwitterDataFetcher;
