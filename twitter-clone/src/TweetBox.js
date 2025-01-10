import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore"; // Import the new modular methods
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    try {
      // Using the new Firestore v9 modular SDK
      await addDoc(collection(db, "posts"), {
        displayName: "Bharath",
        username: "bharath@05",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
      });

      // Clear the input fields after tweet is sent
      setTweetMessage("");
      setTweetImage("");
    } catch (error) {
      console.error("Error adding tweet: ", error);
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button onClick={sendTweet} type="submit" className="tweet_tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
