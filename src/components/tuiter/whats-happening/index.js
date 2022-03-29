import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./whats-happening.css";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    dispatch({ type: "create-tuit", tuit: whatsHappening });
  };

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
          value={whatsHappening}
          onChange={(event) => setWhatsHappening(event.target.value)}
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
          onClick={tuitClickHandler}
        >
          Tuit
        </button>
      </div>
    </>
  );
};
export default WhatsHappening;
