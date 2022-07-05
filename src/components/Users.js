import React from 'react';
import '../styles/Users.css';
import UsersNumber from './UsersNumber';
import UsersTable from './UsersTable';




class Users extends React.Component{
 

render(){
    
    return (
        <div className='Users'>
          <p className='title-users'>Users</p> 
          <div className='flex-container'>
          <div className='flex1'>
          <UsersNumber/>
          </div>
          <div className='flex2'>
            <UsersTable/>
          </div>
          </div>
        </div>
    )
}

}


export default Users