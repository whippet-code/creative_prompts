// component to return a button to either save or mark a prompt as completed
// takes props of user.-id and prompt._id
// sends fetch request to DB to update user's savedPrompts or completedPrompts

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

//props -user & prompt._id
const SaveNFav = (props) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // check if prompt is saved
    if (props.savedPrompts.includes(props.promptId)) {
      setIsSaved(true);
    }
    // check if prompt is completed
    if (props.completedPrompts.includes(props.promptId)) {
      setIsCompleted(true);
    }
  }, [props, props.promptId]);

  //click handlers
  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="SaveNFav">
      {isSaved ? (
        <Button variant="success" onClick={handleSave}>
          Saved
        </Button>
      ) : (
        <Button variant="outline-success" onClick={handleSave}>
          Save This
        </Button>
      )}
      {isSaved ? (
        <Button variant="success" onClick={handleComplete}>
          Completed
        </Button>
      ) : (
        <Button variant="outline-success" onClick={handleComplete}>
          I've done it
        </Button>
      )}
    </div>
  );
};

export default SaveNFav;
