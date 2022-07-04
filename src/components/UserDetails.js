import React from 'react';
import '../styles/UserDetails.css';
import {connect} from 'react-redux';
import {fetchUserDetails} from '../actions';
import GeneralDetails from '../components/GeneralDetails';
import arrow from '../assets/arrow.svg';
import circle from '../assets/circle.svg';
import person from '../assets/person.svg';
import line1 from '../assets/line1.svg';
import star from '../assets/star.svg';
import star1 from '../assets/star1.svg';



class UserDetails extends React.Component{
    componentDidMount(){
        this.props.fetchUserDetails();
      }


    renderName(){
        return this.props.users.map(user => {
            return(
             <div className='show-name'>
               {user.username}
             </div>
           )
         });
    }

    renderCode(){
        return this.props.users.map(user => {
            return(
             <div className='show-code'>
               {user.password}
             </div>
           )
         });
    }
    


    render(){
        return (
            <div className='UserDetails'>
               <a href='/users' className='back-to-users'>
               <img src={arrow} alt='arrow' className='arrow-icon'/>
               </a>
               <p className='to-users'>Back to Users</p>
               <p className='user-details'>User Details</p>
               <button className='blacklist-user'>BLACKLIST USER</button>
               <button className='activate-user'>ACTIVATE USER</button>
               <div className='grid-container'>
                  <div className='item1'>
                    <img src={circle} alt='circle' className='circle-icon'/>
                    <img src={person} alt='person' className='person-icon'/>
                    <p className='name-shown'>{this.renderName()}</p>
                    <p className='code-shown'>{this.renderCode()}</p>
                    <img src={line1} alt='line' className='line1'/>
                    <p className='user-tier'>User's Tier</p>
                    <img src={star} alt='star' className='star'/>
                    <img src={star1} alt='star' className='star1'/>
                    <img src={star1} alt='star' className='star2'/>
                    <img src={line1} alt='line' className='line2'/>
                    <p className='amount'>₦200,000.00</p>
                    <p className='bank'>9912345678/Providus Bank</p>
                    <a href='/' className='details'>General Details</a>
                    <a href='/userdetails' className='documents'>Documents</a>
                    <a href='/userdetails' className='bank-details'>Bank Details</a>
                    <a href='/userdetails' className='loan-details'>Loans</a>
                    <a href='/userdetails' className='savings-details'>Savings</a>
                    <a href='/userdetails' className='app-system'>App and System</a>
                  </div>
                  <GeneralDetails/>
               </div>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return { 
        users: (state.users)
       }
  };
  
  export default connect(mapStateToProps, {fetchUserDetails})(UserDetails);
  