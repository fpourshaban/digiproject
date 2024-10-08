import React,{useEffect, useState} from 'react'
import Request from './Request'
import './css/slideshow.css'



export default function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0)
   
   
    const slides = [
      { id: 1, src: './images/406870_3175_XL.jpg', title: 'Slide 1' },
      { id: 2, src: './images/digital_camera_photo-1080x675.jpg', title: 'Slide 2' },
      { id: 3, src: './images/pp.jpg', title: 'Slide 3' },
    ]
      
    
    useEffect(()=>{
      console.log(slides)
      const interval = setInterval(()=>{
        nextSlide()
      },5000);

      return ()=> clearInterval(interval)
    },[])
   

  const nextSlide = () => {  
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);  
  };  

  const prevSlide = () => {  
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);  
  }  

  return (  
      <div id="slideshow">  
        <img className='slide' src={slides[currentSlide].src} alt='slideshow'/> 
     
        <button className='prvbtn' onClick={prevSlide}>Previous</button>  
        <button className='nxtbtn' onClick={nextSlide} >Next</button>  
    </div>  
  );  
};  

