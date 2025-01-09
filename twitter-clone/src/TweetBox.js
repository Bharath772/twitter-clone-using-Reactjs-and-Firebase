import React from "react";
import "./TweetBox.css";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <input placeholder="What's happening?" type="text" />
        </div>

        <input placeholder="Optional:Enter image URL" type="text" />

        <Button className="tweet_tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
