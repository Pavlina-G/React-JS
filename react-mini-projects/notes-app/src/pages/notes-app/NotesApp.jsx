import React from 'react'
import './NotesApp.css'
import NotesList from '../../components/notes-list/NotesList'


function NotesApp() {

  return (
    <div className='notes-wrapper'>
      <NotesList/>
    </div>
  )
}

export default NotesApp