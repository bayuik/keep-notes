import React from "react";

const Note = ({ title, content }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Note;
