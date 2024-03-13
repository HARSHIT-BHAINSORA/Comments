import react, { useState } from "react";
import Comments from "./Components/Comments";
import "./Components/Comments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { data } from "./Components/Data/Comments";
import { updateComment } from "./Components/func";

const App = () => {
  const [comment, setcomment] = useState(false);
  const [comments, setComments] = useState(data);
  const addNewReply = (targetid, newcomment) => {
    const newUpdatedComment = updateComment(comments, targetid, newcomment);
    console.log(newUpdatedComment);
    setComments(newUpdatedComment);
    console.log(comments);
  };

  console.log(data);
  return (
    <div>
      <div className="container">
        <h2>Comment Functionality</h2>

        <span>
          <img
            className="image"
            src="https://upload.wikimedia.org/wikipedia/en/b/bf/Ben_Tennyson.png"
            alt="photo"
          />
        </span>
      </div>

      <Comments commentData={comments} addNewReply={addNewReply} />
    </div>
  );
};

export default App;
