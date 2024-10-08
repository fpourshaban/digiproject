import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Request from './Request.jsx'
export default function Offer() {
    const [offer, setoffer] = useState([]);
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {

        Request('https://jsonplaceholder.typicode.com/photos', setoffer)

    }, []
    )

    const goToOffer = () => {
        navigate("/Offer")
    }
    const scrollRight = () => {
        ref.current?.scrollBy({ left: 30, behavior: 'smooth' });


    }
    const scrollLeft = () => {
        ref.current?.scrollBy({ left: -30, behavior: 'smooth' });

    }

    return (
        <div id="offer">
            <div>
                <div className="offerproduct" >
                    <div id="offertitle">پیشنهاد <br />شگفت انگیز</div>
                </div>
            </div>
            {offer.length > 0 && (offer.slice(0, 8).map(offer => (
                <div className="offerproduct" key={offer.id} >
                    <img className="offerpost" src={offer.url} onClick={goToOffer}></img>
                    <p className="caption" >{offer.title}</p>
                    <p className="price" >{offer.albumId}</p>
                </div>)))}
            <button id="scrollright" onClick={scrollRight} >&rarr;</button>
            <button id="scrollleft" onClick={scrollLeft} >&larr;</button>
        </div>
    )
}
