import React from "react";
import { useDispatch } from "react-redux";

import TuitStats from "./tuit-stats.js";
import { deleteTuit } from "../../../actions/tuits-actions";

import "./tuit.css";

const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
    <div id={tuit._id} className="wd-tweet list-group-item">
      <div className="wd-pfp">
        <img src={tuit.avatarImage} alt="avatar" />
      </div>
      <div className="wd-body">
        <p className="wd-author">
          <span className="wd-name">
            {tuit.postedBy.username}{" "}
            {tuit.verified ? <i className="fa fa-check-circle"></i> : ""}
          </span>{" "}
          <span className="wd-darkgray">
            @{tuit.handle} ‧ {tuit.time}
          </span>
          <span className="wd-remove">
            <i
              onClick={() => deleteTuit(dispatch, tuit)}
              className="fas fa-times fa-lg fa-pull-right wd-interact"
            ></i>
          </span>
        </p>
        <p className="wd-tweet-body">{tuit.tuit}</p>
        {tuit.attachments !== undefined &&
          tuit.attachments.image !== undefined && (
            <img
              className="wd-tweet-img"
              src={tuit.attachments.image}
              alt="Tweet Attachment"
            />
          )}
        {tuit.attachments !== undefined &&
          tuit.attachments.video !== undefined && (
            <iframe
              title="Tweet Video"
              className="wd-tweet-img"
              src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
            />
          )}

        <div className="wd-tweet-icons">
          <span className="wd-symbol wd-interact">
            <i className="far fa-comment"></i>
            <span className="wd-symbol-count">{tuit.comments}</span>
          </span>
          <span className="wd-symbol wd-interact">
            <i className="fa fa-retweet"></i>
            <span className="wd-symbol-count">{tuit.retuits}</span>
          </span>
          <TuitStats tuit={tuit} />
          <span className="wd-symbol wd-interact">
            <i className="fa fa-share"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TuitListItem;
