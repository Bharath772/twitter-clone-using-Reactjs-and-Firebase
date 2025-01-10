import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Correct import for db from firebase.js
import { collection, onSnapshot } from "firebase/firestore"; // Import necessary functions for Firestore

import TweetBox from "./TweetBox";
import Post from "./Post";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Set up a listener for the "posts" collection
    const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
      // Map the docs into an array of data objects and update state
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });

    // Cleanup the subscription when the component unmounts
    return () => unsub();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      {/* Post with Framer Motion */}
      <motion.div
        className="feed_posts" // Wrap the posts section in motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 20, // Initially the posts are below the screen
          },
          visible: {
            opacity: 1,
            y: 0, // Posts will move to their natural position with opacity
            transition: {
              type: "spring",
              stiffness: 50,
              damping: 25,
              delay: 0.2, // Delay for a nice staggered appearance
            },
          },
        }}
      >
        {posts.map((post, index) => (
          <motion.div
            key={index} // Use index as the key if post.id is not available
            className="post_container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Fade out animation on exit
            transition={{
              duration: 0.5, // Animation duration
              ease: "easeInOut",
            }}
          >
            <Post
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              image={post.image}
              avatar={post.avatar} // Use post.avatar for the avatar
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Feed;
