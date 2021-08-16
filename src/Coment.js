import React from "react";

const Comment = (props) => {
  return (
    <div>
      <div className="comment">
        <a href="http://" className="avatar">
          <img src={props.image} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">Today at {props.time}</span>
          </div>
          <div className="text">{props.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
