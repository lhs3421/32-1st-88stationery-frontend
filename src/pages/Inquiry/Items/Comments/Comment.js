import React from "react";

function Comment({ comment, deleteHandler }) {
  return (
    <li key={comment.id}>
      <span>
        {comment.user} : {comment.text}
      </span>
      <div className="commentAction">
        <button
          onClick={() => {
            deleteHandler(comment.id);
          }}
        >
          ✖
        </button>
      </div>
    </li>
  );
}

export default Comment;