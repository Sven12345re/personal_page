import React from "react";

function Card(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <img src={props.image} alt="" />
      <div>Description Length: {props.description.length} charakters.</div>
    </div>
  );
}

export default Card;
