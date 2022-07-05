import React from 'react';
import '../styles/UsersNumber.css';
import usersn from '../assets/usersn.svg';
import usersn1 from '../assets/usersn1.svg';
import usersn2 from '../assets/usersn2.svg';
import actusers from '../assets/actusers.svg';
import actusers1 from '../assets/actusers1.svg';
import usersl from '../assets/usersl.svg';
import usersl1 from '../assets/usersl1.svg';
import usersl2 from '../assets/usersl2.svg';
import susers from '../assets/susers.svg';
import susers1 from '../assets/susers1.svg';
import susers2 from '../assets/susers2.svg';
import susers3 from '../assets/susers3.svg';
import susers4 from '../assets/susers4.svg';
import susers5 from '../assets/susers5.svg';
import susers6 from '../assets/susers6.svg';


class UsersNumber extends React.Component{
    render(){
        return (
           
            <div className='flex-container'>
              <div className='item0'>
                <img src={usersn} alt='users number' className='usersn-icon'/>
                <img src={usersn1} alt='users number' className='usersn1-icon'/>
                <img src={usersn2} alt='users number' className='usersn2-icon'/>
                <p className='usersn'>Users</p>
                <p className='usersn1'>2,453</p>
             </div>
              
              <div className='item'>
              <img src={actusers} alt='active users' className='actusers-icon'/>
              <img src={actusers1} alt='active users' className='actusers1-icon'/>
              <p className='usersn'>Users</p>
              <p className='usersn1'>2,453</p>
              </div>
             
              <div className="item3">
               <img src={usersl} alt='users with loan' className='usersl-icon'/>
               <img src={usersl1} alt='users with loan' className='usersl1-icon'/>
               <img src={usersl2} alt='users with loan' className='usersl2-icon'/>
               <p className='usersl'>Users With Loans</p>
               <p className='usersn1'>12,453</p>
              </div>  
              <div className="item4">
               <img src={susers} alt='users with loan' className='susers-icon'/>
               <img src={susers1} alt='users with loan' className='susers1-icon'/>
               <img src={susers2} alt='users with loan' className='susers2-icon'/>
               <img src={susers2} alt='users with loan' className='susers3-icon'/>
               <img src={susers3} alt='users with loan' className='susers4-icon'/>
               <img src={susers4} alt='users with loan' className='susers5-icon'/>
               <img src={susers5} alt='users with loan' className='susers6-icon'/>
               <img src={susers6} alt='users with loan' className='susers7-icon'/>
               <p className='susers'>Users With Savings</p>
               <p className='usersn1'>102,453</p>
              </div>
            </div>
        )
    }
}


export default UsersNumber;