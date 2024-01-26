import React, { useState } from 'react'
import './NotesList.css'
import Note from '../note/Note'

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
    }
]

function NotesList() {

    const [notesList, setNotesList] = useState([]);

    // setNotesList(dummyNotes)

    return (

        (!notesList.length && <div className='notes-list-empty'></div>)

            // (notesList.length > 0 && (
            //     <div className='notes-list'>
            //         <h2>Notes List</h2>
            //         <ul>
            //             {
            //                 notesList.map(note => (
            //                     <li key={note.id}>{note.name}</li>
            //                 ))
            //             }
            //         </ul>
            //         /</div>

            // ))
            )
}

export default NotesList