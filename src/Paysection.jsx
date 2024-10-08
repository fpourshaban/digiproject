import "./css/Paysection.css"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Paysection() {
    const navigate = useNavigate();
    const handleClick = (route) => {
        navigate(route)
    }
    
    return (
        <div id='section1'>
            <div className="payservice" onClick={()=>{handleClick('/login')}} >
                <img src="./images/1.png"  />
                <p className='caption' >سوپرمارکت دیجی کالا</p>
            </div>
            <div className="payservice" onClick={()=>{handleClick('/loan')}}>
                <img src="./images/2.png" />
                <p className='caption' >دریافت وام</p>
            </div>
            <div className="payservice" onClick={()=>{handleClick('/style')}}>
                <img src="./images/3.png" />
                <p className='caption' >حراج استایل</p>
            </div>
            <div className="payservice" onClick={()=>{handleClick('/backToSchool')}}>
                <img src="./images/4.png" />
                <p className='caption' >بازگشت به مدرسه</p>
            </div>
            <div className="payservice" onClick={()=>{handleClick('/sellerAd')}}>
                <img src="./images/5.png" />
                <p className='caption' >تبلیغات فروشندگان</p>
            </div>
            <div className="payservice" onClick={()=>{handleClick('/prize')}}>
                <img src="./images/6.png" />
                <p className='caption' >جایزه خرید اول</p>
            </div>
            <div className="payservice" onClick={()=>{handleClick('/buy')}}> 
                <img src="./images/7.png" />
                <p className='caption' >خرید چکی</p>
            </div>
            <div className="payservice" onClick={()=>{handleClick('/digiPlus')}}>
                <img src="./images/8.png" />
                <p className='caption' >دیجی پلاس</p>
            </div>
            <div className="payservice" onClick={()=>{handleClick('/digiMehr')}}>
                <img src="./images/9.png" />
                <p className='caption' >دیجی کالا مهر</p>
            </div>
            <div className="payservice" onClick={()=>{handleClick('/more')}}>
                <button id='more'>...</button>
                <p className='caption' >بیشتر</p>
            </div>

             
        </div>
    )
}