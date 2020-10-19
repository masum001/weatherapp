import React from 'react'
import '../App.css';

const Search = ({setQuery, query}) => {
    return (
        <div className='search-box'>
            <input 
                type="text"
                placeholder='Search Your City...'
                className='search-bar'
                value={query}
                onChange={(e)=>setQuery(e.target.value)}/>
        </div>
    )
}

export default Search
