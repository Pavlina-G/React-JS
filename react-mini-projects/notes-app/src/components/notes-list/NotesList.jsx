import './NotesList.css'
import Note from '../note/Note'


function NotesList({ notes, setNotes }) {

    function editNote(noteId) {

    }

    function deleteNote(noteId) {
        let copyNotes = [...notes];
        copyNotes = copyNotes.filter(note => note.id !== noteId);

        setNotes(copyNotes);
    }

    return (
        <div className='notes-wrapper'>
            {(!notes.length ?
                <div className='notes-list-empty'></div>
                :
                <div className='notes-list'>
                    <h1>My Notes</h1>
                    <div className="notes-items">
                        {
                            notes.map(note => (
                                <Note
                                    key={note.id}
                                    name={note.name}
                                    editNote={() => { editNote(note.id) }}
                                    deleteNote={() => { deleteNote(note.id) }}
                                />
                            ))
                        }
                    </div>

                </div>

            )}
        </div>
    )
}

export default NotesList;