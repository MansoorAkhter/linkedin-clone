import React, { useEffect, useState } from "react";
import "./Feed.css";
import {
  Create,
  Image,
  Subscriptions,
  Event,
  CalendarViewDayRounded,
} from "@mui/icons-material";
import InputOption from "../input option/InputOption";
import Post from "../post/Post";
import { db } from "../firebase/firebase";
import firebase from "firebase/compat/app";

const Feed = () => {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Mansoor Akhter",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form action="">
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={Subscriptions} title="Video" color="#e7a33e" />
          <InputOption Icon={Event} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayRounded}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>

      {/* POSTS */}
      {post.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
