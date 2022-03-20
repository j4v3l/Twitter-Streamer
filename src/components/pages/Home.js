import React, { useState, useEffect } from "react";
import TweetsList from "../TweetsList";
import ThemeContextProvider from "../../context/ThemeContext";

function Home() {
  const [tweetData, setTweetData] = useState([]);

  const getTweet = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}`);
    const data = await response.json();

    setTweetData(data);
  };
  useEffect(() => {
    getTweet();
  }, []);

  return (
    <div className="p-10">
      <ThemeContextProvider>
        <TweetsList people={tweetData} />
      </ThemeContextProvider>
    </div>
  );
}

export default Home;
