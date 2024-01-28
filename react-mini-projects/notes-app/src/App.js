
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import NotesApp from './pages/notes-app/NotesApp';
import AddNote from './pages/add-notes/AddNote';

function App() {
  return (
    <div className="App">
      <Header />


      {/* Page urls */}

      <Routes>
        <Route path='/' element={<NotesApp />} />
        <Route path='/add-note' element={<AddNote />} />
      </Routes>

      {/* Page urls */}
    </div>
  );
}

export default App;
