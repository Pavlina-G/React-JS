import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link to={'/'}>Notes</Link>
                </li>
                <li>
                    <Link to={'/add-note'}>Add Note</Link>
                </li>
            </ul>


        </header>
    )




}


export default Header