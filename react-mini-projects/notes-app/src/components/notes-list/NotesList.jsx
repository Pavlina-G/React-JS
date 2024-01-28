import React, { useState } from 'react'
import './NotesList.css'
import Note from '../note/Note'
import AddNote from '../../pages/add-notes/AddNote';

const dummyNotes = [
    {
        name: 'task 1',
        id: 1
    },
    {
        name: 'task 2',
        id: 2
    },
    {
        name: 'task 3',
        id: 3
    },

]

function NotesList() {

    const [notesList, setNotesList] = useState(dummyNotes);

    return (

        (!notesList.length ? <div className='notes-list-empty'></div> :
            <div className='notes-list'>
                <h1>My Notes</h1>
                <ul>
                    {
                        notesList.map(note => (
                            <Note key={note.id} name={note.name} />
                        ))
                    }
                </ul>
            </div>

        )
    )
}

export default NotesList