import React from "react";
import "./resultitem.css";

export const ResultItem = props => {
  const date = new Date(props.pub_date);
  const pub_date = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return (
    <div className="article">
      <a href={props.url}>
        <h3>{props.headline}</h3>
      </a>
      <p id="date">{pub_date}</p>
      <p id="snippet">{props.snippet}</p>
      <span id="byline">{props.byline}</span>
      <button onClick={props.onSaveArticle}>Save Article</button>
    </div>
  );
};
