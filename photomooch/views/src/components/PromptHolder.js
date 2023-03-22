// prompt holder component
// contains the pressforprompt component
// and the filter modal component
// accepts props from app.js of prompts array,
// component has state for filter settings which are passed to the filter component which renders the filter modal.
// the filter state and promtps state are passed to the pressforprompt component

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
    setFilter((prev) => [...prev, e.target.value]);
  };

  return (
    <div className="PromptHolder">
      <h3>Prompt Holder</h3>
      <PressForPrompt prompts={props.prompts} filter={filter} />
      <Filter filter={filter} handleChange={handleChange} />
    </div>
  );
};

export default PromptHolder;