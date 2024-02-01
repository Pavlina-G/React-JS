import './NotesList.css'
import Note from '../../components/note/Note'


function NotesList({ notes, setNotes }) {

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
                                    note={note}
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