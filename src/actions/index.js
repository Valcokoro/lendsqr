import users from '../api/users';
import {FETCH_USERS} from './types';
import { FETCH_USERDETAILS } from './types';



       
export const fetchUsers = () => async dispatch => {
        
    const response = await users.get('/users');
    
    
    dispatch ({ type: FETCH_USERS, payload: response.data.slice(0,7)});
};


export const fetchUserDetails = () => async dispatch => {
        
    const response = await users.get('/users');
    
    
    dispatch ({ type: FETCH_USERDETAILS, payload: response.data.slice(0, 1)});
};
