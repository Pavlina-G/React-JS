
import './App.css';
import Header from './components/header/Header';
import NotesApp from './pages/notes-app/NotesApp';

function App() {
  return (
    <div className="App">
      <Header title="Notes"/>
      <NotesApp/>
    </div>
  );
}

export default App;
