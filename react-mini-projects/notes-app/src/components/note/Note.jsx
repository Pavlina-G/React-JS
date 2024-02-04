import { Link } from 'react-router-dom';
import './Note.css'
import { MdEditNote,  MdDeleteForever} from "react-icons/md";

import React from 'react'

function Note({ note, deleteNote }) {

  return (
    <div className='note-container'>
      <p key={note.id} className=''>{note.name}</p>
      <div className="buttons-wrapper">
        <Link to={`/edit-note/${note.id}`}><MdEditNote /></Link>
        <i onClick={deleteNote}><MdDeleteForever/></i>
      </div>

    </div>


  )
}

export default Note