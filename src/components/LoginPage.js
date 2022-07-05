import React from 'react';
import '../styles/LoginPage.css';
import icon from '../assets/icon.svg';
import logo from '../assets/logo.svg';
import pablo from '../assets/pablo.svg';



class LoginPage extends React.Component{


    render(){
        return (
        <section className='login'>
         <div className='pixels'>
         <img src={icon} alt='icon' className='icon'/>
         <img src={logo} alt='logo' className='logo'/>
         <img src={pablo} alt='pablo sign-in' className='pablo'/>
         </div>
         <div className='enter-details'>
         <p className='welcome'>Welcome!</p>
          <p className='enter'>Enter details to login.</p>
          <form className='form'>
          <input name='Email'    type='text' placeholder='Email' className='mail'/>
           <input name='Password' type='Password' placeholder='Password' className='password'/>
           <button className='show-btn'>SHOW</button>
           <button className='forgot-password-btn'>FORGOT PASSWORD?</button>
           <button className='log-in-btn'>LOG IN</button>
          </form>
         </div>
         
        </section>
        )
       
    }
}



export default LoginPage;