import react, { useState } from "react";

const CommentItems = (props) => {
  const { comment, addNewReply } = props;
  const [showreply, toggleShowreply] = useState(false);
  const [addReply, toggleAddreply] = useState(false);

  const utilsfunc = (e) => {
    const newcomment = e.target.value;
    addNewReply(comment.id, newcomment);
    toggleAddreply(false);
    toggleShowreply(true);
  };

  const handleBlur = (e) => {
    utilsfunc(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) utilsfunc(e);
  };

  return (
    <div className="comment-container">
      <div className="comment-details">
        <div>{comment.comment}</div>
        <div className="comment-btn">
          {comment.subcomment.length > 0 && (
            <span onClick={() => toggleShowreply(!showreply)}>View Reply</span>
          )}
          <span onClick={() => toggleAddreply(!addReply)}>Add Reply</span>
        </div>
      </div>
      {showreply && (
        <Comments commentData={comment.subcomment} addNewReply={addNewReply} />
      )}
      {addReply && (
        <input
          type="text"
          placeholder="Enter your reply"
          className="replyBox"
          autoFocus
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        ></input>
      )}
    </div>
  );
};

const Comments = (props) => {
  const { commentData, addNewReply } = props;
  return (
    <>
      {commentData.map((comment) => (
        <CommentItems
          comment={comment}
          addNewReply={addNewReply}
          key={comment.id}
        />
      ))}
    </>
  );
};

export default Comments;
