import React from 'react';
import '../styles/Users.css';
import UsersNumber from './UsersNumber';
import UsersTable from './UsersTable';




class Users extends React.Component{
 

render(){
    
    return (
        <section className='Users'>
          <h1 className='title-users'>Users</h1> 
          <div className='flex-container'>
          <div className='flex1'>
          <UsersNumber/>
          </div>
          <div className='flex2'>
          <UsersTable/>
          </div>
          </div>
        </section>
    )
}

}


export default Users