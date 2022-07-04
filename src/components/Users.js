import React from 'react';
import '../styles/Users.css';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';
import UsersNumber from './UsersNumber';
import dropdown from '../assets/dropdown.svg';
import dots from '../assets/dots.svg';



class Users extends React.Component{
  componentDidMount(){
    this.props.fetchUsers();
  }

  

  renderForm(){
      return (
      <form>
         <p className='form-org'>Organization</p>
         <select>
           <options>{this.renderOrganization()}</options>
         </select>
         <p className='form-org'>Username</p>
         <input type='text' placeholder='User'/>
         <p className='form-org'>Email</p>
         <input type='text' placeholder='Email'/>
         <p className='form-org'>Date</p>
         <select>
           <options></options>
         </select>
         <p className='form-org'>Phone Number</p>
         <input type='text' placeholder='Phone Number'/>
         <p className='form-org'>Date</p>
         <select>
           <options></options>
         </select>
         <button>Reset</button>
         <button>Filter</button>
      </form>
      )
  }

  updateDate(){
    this.setState({
      data:this.renderForm()
    })
  }

  renderOrganization(){
    return this.props.users.map(user => {
      return(
       <div className='show-org'>
         {user.organization}
       </div>
     )
   });
}

  renderUsername(){
     return this.props.users.map(user => {
       return(
         <div className='show-org'>
            {user.username}
         </div>
    )
  });
}

   renderEmail(){
      return this.props.users.map(user => {
        return(
         <div className='show-org'>
          {user.email}
         </div>
      )
    });
  }

  renderPhoneNumber(){
    return this.props.users.map(user => {
      return(
       <div className='show-org'>
        {user.phone_number}
       </div>
    )
  });
}

   renderDateJoined(){
     return this.props.users.map(user => {
       return(
        <div className='show-org'>
          {user.date_joined}
        </div>
      )
    });
  }

   renderStatus(){
     return this.props.users.map(user => {
      return(
       <div className='show-org'>
         <button className='status-btn'>
         {user.status}
         </button>
       </div>
     )
   });
 }

   renderDots(){
    return this.props.users.map(user => {
      return(
       <div className='show-org'>
         <p className='u-status'>{user.status}</p>
          <img src={dots} alt='dots' className='dots-icon'/>
       </div>
     )
   });
 }

    
    



render(){
    
    return (
        <div className='Users'>
          <p className='title-users'>Users</p> 
          <UsersNumber/>
          <table className='users-table'>
            <tr>
              <th>
               <p className='org1'>ORGANIZATION</p>
               <img src={dropdown}  alt='dropdown icon' className='dropdown1'/>
              </th>
              <th>
               <p className='username'>USERNAME</p>
               <img src={dropdown} alt='dropdown icon' className='dropdown2'/>
              </th>
              <th>
               <p className='email'>EMAIL</p>
               <img src={dropdown} alt='dropdown icon' className='dropdown3'/>
              </th>
              <th>
               <p className='phone'>PHONE NUMBER</p>
               <img src={dropdown} alt='dropdown icon' className='dropdown4'/>
              </th>
              <th>
               <p className='date'>DATE JOINED</p>
               <img src={dropdown} alt='date icon' className='dropdown5'/>
              </th>
              <th>
               <p className='status'>STATUS</p>
               <img src={dropdown} alt='status icon' className='dropdown6'/>
              </th>
            </tr>
            <tr>
              <td className='org2'>
              {this.renderOrganization()}
              </td>
              <td className='org3'>
              {this.renderUsername()}
              </td>
              <td className='org4'>
              {this.renderEmail()}
              </td>
              <td className='org5'>
              {this.renderPhoneNumber()}
              </td>
              <td className='org6'>
              {this.renderDateJoined()}
              </td>
              <td className='org7'>
              {this.renderStatus()}
              </td>
              <td className='org7'>
              {this.renderDots()}
              </td>
            </tr>
          </table>
        </div>
    )
}

}


const mapStateToProps = (state) =>{
  return { 
      users: (state.users)
     }
};

export default connect(mapStateToProps, {fetchUsers})(Users);
