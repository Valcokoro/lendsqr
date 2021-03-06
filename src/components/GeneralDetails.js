import React from 'react';
import '../styles/GeneralDetails.css';
import {connect} from 'react-redux';
import {fetchUserDetails} from '../actions';



class GeneralDetails extends React.Component{
    componentDidMount(){
        this.props.fetchUserDetails();
      }

    
    renderName(){
        return this.props.users.map((user, index) => {
            return(
             <div className='show-name1' key={index}>
               {user.username}
             </div>
           )
         });
    }

    renderPhone(){
        return this.props.users.map((user, index) => {
            return(
             <div className='show-phone1' key={index}>
               {user.phone_number}
             </div>
           )
         });
    }
  
    renderEmail(){
        return this.props.users.map((user,index) => {
            return(
             <div className='show-email1' key={index}>
               {user.email}
             </div>
           )
         });
    }

    
    render(){
         console.log(this.props.users)
        return (
            <div className='GeneralDetails'>
               <div className='flex-container'>
                <div className='grid1'>
               <p className='personal-info'>Personal Information</p>
               <p className='full-name'>FULL NAME</p>
               <p className='name-shown1'>{this.renderName()}</p>
               <p className='phone-number'>PHONE NUMBER</p>
               <p className='phone-shown1'>{this.renderPhone()}</p>
               <p className='email-address'>EMAIL ADDRESS</p>
               <p className='email-shown1'>{this.renderEmail()}</p>
               <p className='bvn'>BVN</p>
               <p className='bvn-shown1'>{this.renderPhone()}</p>
               <p className='gender'>GENDER</p>
               <p className='gender-shown'>Female</p>
               <p className='marital-status'>MARITAL STATUS</p>
               <p className='single'>Single</p>
               <p className='children'>CHILDREN</p>
               <p className='children-number'>None</p>
               <p className='residence'>TYPE OF RESIDENCE</p>
               <p className='apartment'>Parent's Apartment</p>
               </div>
               <div className='grid2'>
               <p className='education-info'>Education and Employment</p>
               <p className='education-level'>LEVEL OF EDUCATION</p>
               <p className='name-shown1'>BSc</p>
               <p className='employment-status'>EMPLOYMENT STATUS</p>
               <p className='phone-shown1'>Employed</p>
               <p className='employ-sector'>SECTOR OF EMPLYMENT</p>
               <p className='email-shown1'>FinTech</p>
               <p className='employ-duration'>DURATION OF EMPLOYMENT</p>
               <p className='years'>2 years</p>
               <p className='official-email'>OFFICIAL EMAIL</p>
               <p className='email'>{this.renderEmail()}</p>
               <p className='children'>MONTHLY INCOME</p>
               <p className='monthly-income'>???200,000.00- ???400,000.00</p>
               <p className='loan-repay'>LOAN REPAYMENT</p>
               <p className='amount'>40,000</p>
               </div>
               <div className='grid3'>
               <p className='socials'>Socials</p>
               <p className='twitter'>TWITTER</p>
               <p className='twitter-shown'>@Candice_Bartlett</p>
               <p className='facebook'>FACEBOOK</p>
               <p className='facebook-shown'>Candice Bartlett</p>
               <p className='instagram'>INSTAGRAM</p>
               <p className='insta-shown'>@Candice_Bartlett</p>
               </div>
               <div className='grid4'>
               <p className='guarantor-grid'>Guarantor</p>
               <p className='guarantor-name'>FULL NAME</p>
               <p className='guarantor-name1'>Debby Wilson</p>
               <p className='guarantor-phone'>PHONE NUMBER</p>
               <p className='guarantor-phone1'>(665) 257-5275</p>
               <p className='guarantor-email'>EMAIL ADDRESS</p>
               <p className='guarantor-email1'>@Candice_Bartlett</p>
               <p className='relationship'>RELATIONSHIP</p>
               <p className='guarantor-relate'>Sister</p>
               </div>
               </div>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return { 
        users: (state.userdetails)
       }
  };
  
  export default connect(mapStateToProps, {fetchUserDetails})(GeneralDetails);