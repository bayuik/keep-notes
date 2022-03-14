import React, { useState } from "react";
import Heading from "./components/Header";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (input) => {
    setNotes([...notes, input]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((item, index) => index !== id));
  };

  return (
    <div>
      <Heading />
      <CreateArea addNote={handleAddNote} />
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} deleteNote={handleDeleteNote} content={note.content} />;
      })}
      <Footer />
    </div>
  );
};
export default App;
