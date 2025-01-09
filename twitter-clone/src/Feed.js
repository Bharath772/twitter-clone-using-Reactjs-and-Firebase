import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {/* TweetBox */}
      <Post
        displayName="Bharath"
        username="bharath@05"
        verified={true}
        text="Yooo its working"
        image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemRmdGNjZmhvb2d1OWd1ZmpoaWNocjhzZGI0cDZvM3phcW55NTF6YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26DOMQa5Ib2SmaRZm/giphy.gif"
        avatar="https://mui.com/static/images/avatar/1.jpg"
      />
      <Post />
      <Post />
      <Post />
      <Post />
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Feed;
