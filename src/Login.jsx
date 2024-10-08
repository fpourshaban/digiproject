import React, { useState } from 'react'
import './css/Login.css';


export default function Login() {
  const [state ,setstate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    /*try{
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json =>{
        console.log(json);
        (state == json.email) ? console.log('login passed!') : console.log('login failed')
      })
    }
    catch{console.log('error')}
*/
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <div className='login-logo'>digikala</div>
        <h3>ورود|ثبت نام</h3>
        <p>سلام! <br /> لطفا شماره موبایل یا ایمیل خودرا وارد کنید</p>
        <input type="text" value={state}  
          onChange={(e) => setstate(e.target.value)}  />
        <p>لطفا این قسمت را خالی نگذارید</p>
        <button type='submit' className='enter' >ورود</button>
        <p>ورود شما به معنای پذیرش شرایط دیجی کالا و قوانین حریم خصوصی است</p>
      </div>
    </form>
  )
}
