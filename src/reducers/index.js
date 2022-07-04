import { combineReducers } from "redux";
import {FETCH_USERS} from '../actions/types';



const usersReducer = (users=[], action) =>{
   if(action.type === FETCH_USERS){
    return  [...users, ...action.payload]
   }
    return users;
}

const userdetailsReducer = (users=[], action) =>{
    if(action.type === FETCH_USERS){
     return  [...users, ...action.payload]
    }
     return users;
 }



 

export default combineReducers({
    users: usersReducer,
    userdetails: userdetailsReducer,

});