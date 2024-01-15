import React, { useContext } from 'react'
import './theme.css'
import { ThemeContext } from '../../App'

const ThemeButton = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={()=> setTheme(!theme)}
            className='theme-button'>Change Theme
        </button>
    )
}


export default ThemeButton;