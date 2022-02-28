import Heading from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

const App = () => {
  return (
    <div>
      <Heading />
      {notes.map(({ key, title, content }) => (
        <Note key={key} title={title} content={content} />
      ))}
      <Footer />
    </div>
  );
};
export default App;
