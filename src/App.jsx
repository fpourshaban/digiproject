import React from 'react'
import Digikala from './Digikala.jsx'
import Login from './Login.jsx'
import Story from './Story.jsx'
import { Routes,BrowserRouter, Route } from 'react-router-dom';
import Slideshow from "./Slideshow"; 

class App extends React.Component{
  render(){
    return(
       <div>
        <BrowserRouter>
          <Routes>  
            <Route path="/" element={<Digikala />} />  
            <Route path="/Login" element={<Login />} />
            <Route path="/Story" element={<Story />} />  
          </Routes>
       </BrowserRouter>
       
    </div>)   
  }
}

export default App
