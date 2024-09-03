import React from 'react'
   
   export default function Request(url,setUrl) {
    
    try{ 
         fetch(url )
           .then(response => {
    
             if (!response.ok) {  
               throw new Error('Network response was not ok');  
             }  
             return response.json();
           })
           
           .then(json =>{ 
                     
             setUrl(json) ;
             console.log(json)
             })
           }
          catch(error){console.log('error',error)
    
          };
     return (
       <div>Request</div>
     )
   }
   