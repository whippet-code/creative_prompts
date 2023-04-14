// component to return a button to either save or mark a prompt as completed
// takes props of user.-id and prompt._id
// sends fetch request to DB to update user's savedPrompts or completedPrompts

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

//props -user, updateUser()  & prompt._id
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
    // make copy of user obj
    const newUser = { ...props.user };
    // if prompt is saved, remove from savedPrompts
    if (isSaved) {
      const index = props.user.savedPrompts.indexOf(props.promptId);
      newUser.savedPrompts.splice(index, 1);
      props.updateUser((prev) => (prev = newUser));
    }
    // if prompt is not saved, add to savedPrompts
    else {
      newUser.savedPrompts.push(props.promptId);
      props.updateUser((prev) => (prev = newUser));
    }

    // make fetch request to update users savedPrompts in DB
    try {
      fetch(`http://localhost:8080/users/save/${newUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          savedPrompts: props.user.savedPrompts,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
        })
        // update user in localStorage
        .then(localStorage.setItem("user", JSON.stringify(props.user)))
        // update isSaved state
        .then(setIsSaved(!isSaved));
    } catch (err) {
      // if fetch fails, alert user
      console.log(err);
      alert("Error updating. Please try again.");
    }
  };

  // FINISH AS ABOVE BUT TO USERS/COMPLETE/:ID
  const handleComplete = () => {
    // make copy of user obj
    const newUser = { ...props.user };
    // if prompt is completed already, remove from completedPrompts
    if (isCompleted) {
      const index = props.user.completedPrompts.indexOf(props.promptId);
      newUser.completedPrompts.splice(index, 1);
      props.updateUser((prev) => (prev = newUser));
    }
    // if prompt is not completed, add to completedPrompts
    else {
      newUser.completedPrompts.push(props.promptId);
      props.updateUser((prev) => (prev = newUser));
    }

    // make fetch request to update users completedPrompts in DB
    try {
      fetch(`http://localhost:8080/users/complete/${newUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          completedPrompts: props.user.completedPrompts,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
        })
        // update user in localStorage
        .then(localStorage.setItem("user", JSON.stringify(props.user)))
        // update isCompleted state
        .then(setIsCompleted(!isCompleted));
    } catch (err) {
      // if fetch fails, alert user
      console.log(err);
      alert("Error updating. Please try again.");
    }
  };

  return (
    <div className="SaveNFav">
      {isSaved ? (
        <Button variant="primary" onClick={handleSave}>
          Saved
        </Button>
      ) : (
        <Button variant="outline-light" onClick={handleSave}>
          Save
        </Button>
      )}
      {isCompleted ? (
        <Button variant="primary" onClick={handleComplete}>
          Completed
        </Button>
      ) : (
        <Button variant="outline-light" onClick={handleComplete}>
          Mark Done
        </Button>
      )}
    </div>
  );
};

export default SaveNFav;
