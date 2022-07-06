import React from 'react';
import '../styles/UsersTable.css';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';
import dropdown from '../assets/dropdown.svg';
import dots from '../assets/dots.svg';




   class UsersTable extends React.Component{

    componentDidMount(){
        this.props.fetchUsers();
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
            <section className='flex'>
              <table className='users-table'>
                <tbody>
                <tr>
                <th>
                 <p className='org1'>ORGANIZATION</p>
                   <img src={dropdown} alt='dropdown icon' className='dropdown1'/>
                </th>
                <th>
                 <p className='username'>USERNAME</p>
                 <img src={dropdown} alt='dropdown icon' className='dropdown2'/>
                </th>
                <th>
                <p className='user-email'>EMAIL</p>
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
              </tbody>
             </table>
            </section>
            
           )
       }
   }


   const mapStateToProps = (state) =>{
    return { 
        users: (state.users)
       }
  };
  
  export default connect(mapStateToProps, {fetchUsers})(UsersTable);
  