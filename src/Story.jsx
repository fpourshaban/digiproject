import React, { useState, useRef ,useEffect } from 'react'
import './css/story.css'
import { useNavigate } from 'react-router-dom'
import Request from './Request.jsx'
import Modal from './Modal.jsx'
export default function Story() {
    const [state, setstate] = useState([]);
    const ref = useRef(null);
    const [currentPhotoUrl, setCurrentPhotoUrl] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (url) => {
        setIsModalOpen(true);
        setCurrentPhotoUrl(url);
    }
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
          Request(url, setstate);
        

    }, []
    )
    
   
    const scrollRight = () => {
        ref.current?.scrollBy({ left: 30, behavior: 'smooth' });


    }
    const scrollLeft = () => {
        ref.current?.scrollBy({ left: -30, behavior: 'smooth' });

    }

  return (
    <div className='storyshow'>
          <div id="stories" ref={ref}>
              {state.map(photo => (
                  <div className="story" key={photo.id} >

                      <img className="post" src={photo.url} onClick={()=>openModal(photo.url)}></img>
                      <p className="caption" >{photo.title}</p>
                  </div>))}
              <button id="scrollright" onClick={scrollRight} >&rarr;</button>
              <button id="scrollleft" onClick={scrollLeft} >&larr;</button>
          </div>
         
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <div id="modal-post">
                  {currentPhotoUrl && <img id="modal-img"  src={currentPhotoUrl} alt="Selected" />}
                    <p></p>
                </div>
            </Modal>
          
    </div>
  )
}
