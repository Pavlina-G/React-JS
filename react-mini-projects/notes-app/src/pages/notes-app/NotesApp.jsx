import React from 'react'
import './NotesApp.css'
import NotesList from '../../components/notes-list/NotesList'
import Button from '../../components/button/Button'

function NotesApp() {

  function handleBtnClick() {
    
  }

  return (
    <div className='notes-wrapper'>
      <Button text="Add Note" handleClick={handleBtnClick}/>
      <NotesList/>
    </div>
  )
}

export default NotesApp