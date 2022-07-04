import users from '../api/users';
import {FETCH_USERS} from './types';



       
export const fetchUsers = () => async dispatch => {
        
    const response = await users.get('/users');
    const result = response.data.slice(0, 7)
    
    dispatch ({ type: FETCH_USERS, payload: result});
};
