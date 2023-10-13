import { useEffect, useState } from "react";
import{ nanoid } from "nanoid";
import NotesList from "./component/NotesList";
import Search from "./component/Search";
import Header from "./component/Header";

const App = () =>{
  const[notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "this my first note",
    date: "15/09/2023"
    },
    {
    id: nanoid(),
    text: "this my second note",
    date: "15/09/2023"
    },
    {
      id: nanoid(),
      text: "this my third note",
      date: "15/09/2023"
    },
    {
      id: nanoid(),
      text: "this my new note",
      date: "20/09/2023"
    },
]);

const [searchText, setSearchText] = useState("");

const [darkMode, setDarkMode] = useState(false);

const addNote = (text) =>{
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toDateString(),
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) =>{
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

  return(
   
    <div className="back">
      <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText} />
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote = {deleteNote}
      />
      </div>
      </div>
    </div>
   
  )
};

export default App;