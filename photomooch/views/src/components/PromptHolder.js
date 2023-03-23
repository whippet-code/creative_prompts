// prompt holder component
// contains the pressforprompt component
// and the filter modal component

// import react components
import React, { useState } from "react";

// import components
import PressForPrompt from "./PressForPrompt";
import Filter from "./Filter";

// props from app.js are the prompts array
const PromptHolder = (props) => {
  // set state for filter settings
  const [filter, setFilter] = useState([]);

  // handle change of filter settings
  const handleChange = (e) => {
    if (e === null) setFilter([]);
    else {
      setFilter((prev) => [...prev, e.target.value]);
    }
  };

  return (
    <div className="PromptHolder">
      <PressForPrompt prompts={props.prompts} filter={filter} />
      <Filter filter={filter} handleChange={handleChange} />
    </div>
  );
};

export default PromptHolder;
