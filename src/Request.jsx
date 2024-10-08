//import React from 'react'

import { useEffect } from "react";

   
export default function Request(url, setUrl) {
    
       const fetchData = async () => { 
           try {
               const response = await fetch(url);

               if (!response.ok) {
                 throw new Error('Network response was not ok');
               }
               const json = await response.json();
               
               setUrl(json);
                console.log(json)
               
           }
           catch (error) {
               console.log('error', error)
           }
       };
       if (url) {
           fetchData();
       }
    
     return (
       <div>Request</div>
     )
   }
   