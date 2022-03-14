import React, { useState } from "react";

const CreateArea = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
        <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button
          type="button"
          onClick={() => {
            addNote(note);
            setNote({ title: "", content: "" });
          }}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
