import React from "react";
import "./form.css";

const Form = props => {
  return (
    <div className="form-container">
      <form>
        <input
          id="topic"
          name="topic"
          value={props.topic}
          onChange={props.onInputChange}
          placeholder="Enter Topic"
          autoComplete="off"
          autoFocus
        />
        <input
          id="start-year"
          name="startYear"
          value={props.startYear}
          onChange={props.onInputChange}
          placeholder="Enter Start Year (Optional)"
        />
        <input
          id="end-year"
          name="endYear"
          value={props.endYear}
          onChange={props.onInputChange}
          placeholder="Enter End Year (Optional)"
        />
        <button onClick={props.onFormSubmission}>Search</button>
      </form>
    </div>
  );
};

export default Form;
