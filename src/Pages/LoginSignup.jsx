import React from 'react'
import './CSS/LoginSignup.css'


const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='email address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Aldready have an account? <span>login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing i agree to use the terms of privacy and policy</p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup