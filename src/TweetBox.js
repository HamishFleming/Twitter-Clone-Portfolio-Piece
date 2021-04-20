import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      username: "VeryRealUserAccount",
      displayName: "Hamish Fleming",
      avatar:
        "https://www.pngfind.com/pngs/m/53-533721_reeeeee-reeee-icon-hd-png-download.png",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://www.pngfind.com/pngs/m/53-533721_reeeeee-reeee-icon-hd-png-download.png" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetBox__imageInput"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
