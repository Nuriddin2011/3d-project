import React from "react";
import "./button.css";

const Button = (props) => {
  const { title, type } = props;
  return (
    <button
      className={`btn ${
        (type == "add" && "add") ||
        (type == "remove" && "remove") ||
        (type == "checout" && "checkout")
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
