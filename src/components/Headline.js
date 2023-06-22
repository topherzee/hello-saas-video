import React from "react";

const Headline = (props) => (
  <div>
    <h2 className="Headline">{props.text}</h2>
    <h4 className="Headline">{props.subtitle}</h4>
  </div>
);
export default Headline;
