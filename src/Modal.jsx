 
import React from 'react';
import './css/Modal.css';   

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button id='follow'>دنبال کن</button>
                <button className="close-button" onClick={onClose}>X</button>
                <button id="like"><img src="./images/heart.png" /> </button>
                <button id="comment">  <img src="./images/comment-white-oval-bubble.png" /> </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;