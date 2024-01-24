import React from 'react'
import './Button.css'

function Button({text, handleClick}) {
  return <button className='main-btn' onClick={handleClick}>{text}</button>
}

export default Button