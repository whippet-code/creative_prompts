// imports
import "./componentStyles.css";
import { Button } from "react-bootstrap";

const Prompt = (props) => {
  const handleClose = () => {
    props.setPrompt({
      title: "",
      prompt: "",
      image: "",
      category: "",
    });
  };

  return (
    <div className="Prompt flip-card">
      <div className="card-holder flip-card-inner">
        <div className="flip-card-front">
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
