// component which renders the press for prompt button
// accepts props from prompt holder component of prompts array and filter settings
// upon clicking the prompt button the component renders a random prompt from the prompts array using the filter settings

// import react components
import React, { useState } from "react";

// import components
import Prompt from "./Prompt";

// props from prompt holder component are the prompts array and filter settings,
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
    // if filter array isn't empty, set filteredPrompts array to prompts array only is prompt has the same tags as filter
    const filteredPrompts = props.prompts.filter((prompt) => {
      if (props.filter.length !== 0) {
        for (let i = 0; i < props.filter.length; i++) {
          if (prompt.tags.includes(props.filter[i])) {
            return true;
          }
        }
        return false;
      } else {
        return true;
      }
    });
    // using the filtered prompts array, set the prompt state to a random prompt from the array
    setPrompt(
      filteredPrompts[Math.floor(Math.random() * filteredPrompts.length)]
    );
  };

  return (
    <div className="PressForPrompt">
      <h4>Press for prompt</h4>
      <button onClick={handleClick}>Press for Prompt</button>
      <Prompt {...prompt} />
    </div>
  );
};

export default PressForPrompt;
