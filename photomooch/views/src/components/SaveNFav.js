// component to return a button to either save or mark a prompt as completed
// takes props of user.-id and prompt._id
// sends fetch request to DB to update user's savedPrompts or completedPrompts

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

//props -user, setUser()  & prompt._id
const SaveNFav = (props) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // check if prompt is saved
    if (props.user.savedPrompts.includes(props.promptId)) {
      setIsSaved(true);
    }
    // check if prompt is completed
    if (props.user.completedPrompts.includes(props.promptId)) {
      setIsCompleted(true);
    }
  }, [props.promptId, props.user.savedPrompts, props.user.completedPrompts]);

  //click handlers
  const handleSave = () => {
    // if prompt is saved, remove from savedPrompts
    if (isSaved) {
      const index = props.user.savedPrompts.indexOf(props.promptId);
      props.setUser((prev) => (prev = prev.splice(index, 1)));
    }
    // if prompt is not saved, add to savedPrompts
    else {
      props.setUser((prev) => (prev = prev.push(props.promptId)));
    }

    // make fetch request to update users savedPrompts in DB
    try {
      fetch(`http://localhost:8080/users/save/${props.user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          savedPrompts: props.user.savedPrompts,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
        });
    } catch (err) {
      console.log(err);
      alert("Error updating. Please try again.");
    }
    // update comp state
    setIsSaved(!isSaved);
  };

  // FINISH AS ABOVE BUT TO USERS/COMPLETE/:ID
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
      {isCompleted ? (
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
