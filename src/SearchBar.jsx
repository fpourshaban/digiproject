// src/SearchBar.js  
import React, { useState, useEffect, useCallback } from 'react';
import Request from './Request';
import './css/home.css'


const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [isfocus, setIsFocus] = useState(false)

    
    useEffect(() => {
        
        Request('https://jsonplaceholder.typicode.com/users', setData)

        
    }, []) 
    
    const searchData = (value) => {
        
        const results = data.filter(
            (user) => {
                return (
                    value &&
                    user &&
                    user.name &&
                    user?.name?.toLowerCase().includes(value)
                );
            }
        );
        setResults(results);
    };

    const handleChange = (value) => {
        setInput(value)

        searchData(value)

    };
    const handleFocus = ()=>{
        console.log("focus")
        setIsFocus(true); 
    }

    return (
        <div>
            <input
                id="searchinput"
                type="text"
                placeholder="Search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={handleFocus}
            />

        </div>
    );
};
   
SearchBar.displayName = "SearchBar";
export default SearchBar;