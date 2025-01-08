import React from "react";
import "./TweetBox.css";
import { Button } from "@mui/material";

function TweetBox() {
  return (
    <div>
      TweetBox
      <form>
        <div className="tweetBox_input">
          <input placeholder="What's happening?" type="text" />
        </div>

        <input placeholder="Optional:Enter image URL" type="text" />

        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
