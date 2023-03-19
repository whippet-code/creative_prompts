const Prompt = (props) => {
  return (
    <div className="Prompt">
      <div className="card-holder">
        <div className="card-front">
          <h1 className="card-category">{props.category}</h1>
        </div>
        <div className="card-back">
          <h2 className="card-title">{props.title}</h2>
          <h3 className="card-prompt">{props.description}</h3>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
