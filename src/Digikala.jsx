import React, { useEffect, useState,useRef }  from 'react'
import "./home.css"
import {useNavigate} from 'react-router-dom'
import Request from './Request.jsx'
import Slideshow from './Slideshow.jsx';


export default function Digikala() {
  const navigate = useNavigate();
  const [state , setstate] = useState([]);
  const ref = useRef(null);
  const [isVisible,setVisible]=useState();
 

    useEffect(()=>{
      Request('https://jsonplaceholder.typicode.com/photos',setstate)
    },[]
    )


  const handleClick = () => {
    navigate('/Login')
    
  }
 
  const scrollRight=()=>{
    ref.current?.scrollBy({left:30, behavior: 'smooth'});
    
    
  }
  const scrollLeft=()=>{
    ref.current?.scrollBy({left:-30, behavior: 'smooth'});
    
  }
  const showStory =()=>{
    navigate('/Story')
    setVisible(!isVisible); 
  }
 
 
  return (
    <div>
        
      <div className='header'>
        <div className='left'>
          <button> <img src="./images/R.jfif" alt="shop"   /> </button>
          <button className='login' onClick={handleClick}>ورود/ثبت نام</button>
        </div>
        <div className='right'> 
          <div className='logo'>دیجی کالا</div>
          <input id="searchinput" type="text" placeholder='جستجو' />
       
        </div>
        <div className='organize'>
          <div className='goods'>دسته بندی کالاها</div>
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
      <div id="stories" ref={ref}>
       {state.map(photo => (
        <div className="story" key={photo.id} >
        
          <img className="post"src={photo.url} onClick={showStory}></img>
          <p className="caption" >{photo.title}</p>
        </div>))}
       <button id="scrollright" onClick={scrollRight} >&rarr;</button>
       <button id="scrollleft" onClick={scrollLeft} >&larr;</button>
      </div>
     
     <div id="slideshow" >
      
     <Slideshow />
      
     </div>
    </div>
  )
}
