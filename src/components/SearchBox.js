import React from 'react';
import ".././styles/searchBox.css"

export default function SearchBox({placeholder, handleChange}) {
    return(
        <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        />    
    )
}
