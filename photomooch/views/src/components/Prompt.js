// imports
import { useState, useEffect } from "react";

import "./componentStyles.css";
import { Button } from "react-bootstrap";
import SaveNFav from "./SaveNFav";

const Prompt = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const updateUser = (user) => {
    setUser((prevUser) => (prevUser = user));
    // localStorage.setItem("user", JSON.stringify(user));
  };

  const handleClose = () => {
    props.setPrompt({
      title: "",
      prompt: "",
      image: "",
      category: "",
    });
  };

  // set div classname for correct card colour, from card category
  const cardDivClass = () => {
    switch (props.prompt.category) {
      case "Explore":
        return "flip-card-front explore";
      case "Learn":
        return "flip-card-front learn";
      case "Take Notice":
        return "flip-card-front take-notice";
      case "Connect":
        return "flip-card-front connect";
      case "Give":
        return "flip-card-front give";
      default:
        return "flip-card-front";
    }
  };

  return (
    <div className="Prompt flip-card">
      <div className="card-holder flip-card-inner">
        <div className={cardDivClass()}>
          <h1 className="card-title">{props.prompt.title}</h1>
          <h2 className="card-category">{props.prompt.category}</h2>
          <img
            className="card-image"
            src={props.prompt.image}
            alt={props.prompt.title}
          />
        </div>
        <div className="flip-card-back">
          <h2 className="card-title">{props.prompt.title}</h2>
          <h3 className="card-prompt">{props.prompt.prompt}</h3>
          {user ? (
            <SaveNFav
              user={user}
              setUser={updateUser}
              promptId={props.prompt._id}
            />
          ) : (
            ""
          )}
          <Button
            className="card-button"
            variant="outline-dark"
            onClick={handleClose}
          >
            Close Prompt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
