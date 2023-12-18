import { useState } from 'react';
import './search.css';

import React from 'react'


function Search(props) {
// const Search = (props) => {
    const { getDataFromSearchInput } = props;

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (event) => {
        const { value } = event.target;
        setInputValue(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getDataFromSearchInput(inputValue);
    }


    return (
        <form onSubmit={handleSubmit} className='search'>
            <input onChange={handleInputValue} value={inputValue} type="search" name="search" id="search" placeholder='Search Recipe' />
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;