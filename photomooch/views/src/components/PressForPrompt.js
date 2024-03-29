// component which renders the press for prompt button
// accepts props from prompt holder component of prompts array and filter settings
// upon clicking the prompt button the component renders a random prompt from the prompts array using the filter settings

// import react components
import React, { useState } from "react";

// import components
import Prompt from "./Prompt";

// props from prompt holder component are the prompts array "prompts" and filter settings "filter"
const PressForPrompt = (props) => {
  // set state for prompt
  const [prompt, setPrompt] = useState({
    title: "",
    prompt: "",
    image: "",
    category: "",
  });

  // handle click of press for prompt button
  const handleClick = (e) => {
    if (props.filter.length === 0) {
      // if no filter settings are selected
      // set prompt state to a random prompt from the prompts array
      setPrompt(
        props.prompts[Math.floor(Math.random() * props.prompts.length)]
      );
    } else {
      while (true) {
        //generate ranodom prompt from prompts array
        let randomPrompt =
          props.prompts[Math.floor(Math.random() * props.prompts.length)];
        // now itterate through the filter array
        // verify if randomPrompt.tags includes filter all filter array items
        // if it does set prompt state to randomPrompt
        // if it does not repeat the while loop
        if (props.filter.every((item) => randomPrompt.tags.includes(item))) {
          setPrompt(randomPrompt);
          break;
        }
      }
    }
  };

  return (
    <div className="PressForPrompt">
      {prompt.title === "" ? (
        <div className="moochButton" onClick={handleClick}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/60f7fe311bfe837c0a7ccb03/fc2d3168-afaf-4650-8dd8-d8353bbb284c/Mooch+Logo+transparent-08.png?format=1500w"
            alt="Press for prompt button"
          />
        </div>
      ) : (
        <Prompt prompt={prompt} setPrompt={setPrompt} />
      )}
    </div>
  );
};

export default PressForPrompt;
