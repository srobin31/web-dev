import React from "react";

const PostSummaryItem = ({post = {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "image": "../../../images/react-blue.png"
}}) => {
    return (
        <div className="row list-group-item d-flex">
            <div className="col-9 pt-2">
                <p className="text-secondary mb-0">{post.topic}</p>
                <p className="fw-bold d-inline">{post.userName} <i className="fa fa-check-circle"></i> - {post.time}</p>
                <p className="fw-bold mb-0">{post.title}</p>
                <p className="text-secondary mb-0">{post.hasOwnProperty('tweets') ? `${post.tweets} Tuits` : ''}</p>
            </div>

            <div className="col-3 d-flex flex-wrap align-items-center justify-content-center">
                <img src={post.image} className="float-end w-100 rounded" alt="" />
            </div>
        </div>
    );
}

export default PostSummaryItem;