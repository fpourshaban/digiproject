import React,{useEffect, useState} from 'react'
import Request from './Request'



export default function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const[slides , setSlides] = useState([])
    useEffect(()=>{
    Request('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20',setSlides);
    console.log(slides)
},[])
   

  const nextSlide = () => {  
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);  
  };  

  const prevSlide = () => {  
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);  
  }  

  return (  
    <div >  
    {slides.length > 0 && ( 
      <img src={slides[currentSlide].image}  />  
    )}
    <div >  
        <button onClick={prevSlide}>Previous</button>  
        <button onClick={nextSlide} >Next</button>  
      </div>  
    </div>  
  );  
};  

