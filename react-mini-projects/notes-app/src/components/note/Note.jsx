import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './Note.css'

import React from 'react'

function Note({ note, deleteNote }) {

  return (
    <div className='note-container'>
      <p key={note.id} className=''>{note.name}</p>
      <div className="buttons-wrapper">
        <Link to={`/edit-note/${note.id}`} className='main-btn'>Edit</Link>
        <Button text={'Delete'} handleClick={deleteNote} />
      </div>

    </div>


  )
}

export default Note