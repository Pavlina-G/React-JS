import React from 'react'
import './NotesList.css'
import Note from '../note/Note'

function NotesList() {
    return (
        <div className='notes-list'>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    )
}

export default NotesList