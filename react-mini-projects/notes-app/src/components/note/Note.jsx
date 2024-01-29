import Button from '../button/Button';
import './Note.css'

import React from 'react'

function Note(props) {
  const { id, name, editNote, deleteNote } = props;

  return (
    <div className='note-container'>
      <p key={id} className=''>{name}</p>
      <div className="buttons-wrapper">
        <Button text={'Edit'} handleClick={editNote} />
        <Button text={'Delete'} handleClick={deleteNote} />
        </div>

    </div>


  )
}

export default Note