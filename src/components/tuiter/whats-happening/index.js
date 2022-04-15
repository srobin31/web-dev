import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createTuit } from "../../../actions/tuits-actions";

import "./whats-happening.css";

const WhatsHappening = () => {
  const [newTuit, setNewTuit] = useState({
    tuit: "",
    postedBy: {
      username: "WebDev",
    },
    verified: false,
    handle: "WebDev",
    time: "Now",
    logoImage: "images/me.jpg",
    avatarImage: "images/me.jpg",
    comments: 0,
    retuits: 0,
    likes: 0,
    dislikes: 0,
  });
  const dispatch = useDispatch();

  return (
    <>
      <div className="wd-wh-pfp">
        <img src="images/me.jpg" alt="avatar" />
      </div>
      <div className="row pb-3 ml-3 wd-wh-border">
        <textarea
          className="form-control bg-black text-white shadow-none"
          placeholder="What's happening?"
          rows="3"
          value={newTuit.tuit}
          onChange={(e) => setNewTuit({ ...newTuit, tuit: e.target.value })}
        ></textarea>
      </div>
      <div className="row d-table w-100 wd-wh-icons">
        <span className="wd-wh-symbol wd-interact">
          <i className="fas fa-image fa-lg"></i>
        </span>
        <span className="wd-wh-symbol wd-interact">
          <i className="fas fa-chart-line fa-lg"></i>
        </span>
        <span className="wd-wh-symbol wd-interact">
          <i className="far fa-smile fa-lg"></i>
        </span>
        <span className="wd-wh-symbol wd-interact">
          <i className="far fa-calendar fa-lg"></i>
        </span>
        <button
          className="btn btn-primary rounded-pill wd-wh-tuit-btn"
          onClick={() => createTuit(dispatch, newTuit)}
        >
          Tuit
        </button>
      </div>
    </>
  );
};
export default WhatsHappening;
