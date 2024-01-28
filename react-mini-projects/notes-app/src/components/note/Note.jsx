import './Note.css'

import React from 'react'

function Note(props) {
  const { id, name} = props;
  return (
    <li key={id} className='container'>
      <p>{name}</p>
    </li>
  )
}

export default Note