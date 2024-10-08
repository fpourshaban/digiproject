import React, { useEffect } from 'react'
import './css/home.css'

const SearchResultList = ({ results }) => {
    
   
const handleFocus = ()=>{
    console.log("item focus")
}
    
    return (
        <div id="searchResult">
            {
                results.map((user) => {
                    return <div  id="result-item" key={user.id} >{user.name} </div>;
                        
                    
                })
            }

        </div>
    );
}
    
export default SearchResultList;
    


