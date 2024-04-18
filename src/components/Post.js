// Post.js

import React, { useState } from "react";
import "./Post.css";

function Post({ setIsModalOpen }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [user, setUser] = useState(false);
  const handleLike = () => {
    if (user) {
      if (liked) {
        setLikes((prevLikes) => prevLikes - 1);
      } else {
        setLikes((prevLikes) => prevLikes + 1);
      }
    } else {
      alert("User Not Logged In");
      setIsModalOpen(true);
      setLiked(!liked);
    }
  };

  return (
    <div className="post">
      <img
        src="https://source.unsplash.com/1080x1080/?people"
        alt="Post"
        className="post-image"
      />
      <div className="post-actions">
        <button
          className={liked ? "like-button liked" : "like-button"}
          onClick={handleLike}
        >
          <span role="img" aria-label="Like">
            ❤️
          </span>
        </button>
        <span className="like-count">{likes}</span>
      </div>
    </div>
  );
}

export default Post;
