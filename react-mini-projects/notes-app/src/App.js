
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import AddNote from './pages/add-notes/AddNote';
import NotesList from './components/notes-list/NotesList';
import { useState } from 'react';


function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Header />

      {/* Page urls */}

      <Routes>
        <Route path='/' element={<NotesList notes={notes} setNotes={setNotes}/>} />
        <Route path='/add-note' element={<AddNote setNotes={setNotes}/>} />
      </Routes>

      {/* Page urls */}
    </div>
  );
}

export default App;
