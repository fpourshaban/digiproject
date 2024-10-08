import React, { useEffect, useState,useRef }  from 'react'
import "./css/home.css"
import { useNavigate } from 'react-router-dom'
import Slideshow from './Slideshow.jsx'
import Story from './Story.jsx'
import Paysection from './Paysection.jsx'
import Offer from './Offer.jsx'
import SearchBar from './SearchBar.jsx'
import SearchResultList from './SearchResultList'


export default function Digikala() {
  
    const navigate = useNavigate();
    const [results, setResults] = useState([]) 

    
    const handleClick = () => {
        navigate('/Login')
       
    
    }
   

    
 
  return (
    <div>
        
      <div className='header'>
        <div className='left'>
          <button> <img src="./images/R.jfif" alt="shop"   /> </button>
          <button className='login' onClick={handleClick}>ورود| ثبت نام</button>
        </div>
        <div className='right'> 
                  <div className="logo">دیجی کالا</div>
                  <div id="search">
                      <SearchBar setResults={setResults} />
                      <SearchResultList results={results} />
                  </div>
                  
        </div>
              <div className='organize'>
                  <div className='goods' onClick={() => 
                      <div> kala</div>
                  } >دسته بندی کالاها</div>
          <div className='parts'>
            <ul>
              <li>شگفت انگیز ها</li>
              <li>سوپرمارکت</li>
              <li>کارت هدیه</li>
              <li>پرفروش ترین ها</li>
              <li>تخفیف ها و پیشنهاد ها</li>
              <li>سوالی دارید؟</li>
            </ul>
          </div>
          <div className="city">شهرخود را انتخاب کنید</div>
        </div>
      </div>
      <div id="container">
        <div>
           <Story />
        </div>
     
        <div  >
           <Slideshow />
        </div>
        <div>
           <Paysection />
        </div>

        <div>
            <Offer />
        </div>

     </div>
    </div>
  )
}
