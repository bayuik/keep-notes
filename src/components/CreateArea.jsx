import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

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
      <form className="create-note">
        {isExpanded && <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />}
        <textarea onClick={() => setExpanded(!isExpanded)} onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab
            type="button"
            onClick={() => {
              addNote(note);
              setNote({ title: "", content: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
