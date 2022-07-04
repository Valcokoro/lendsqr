import axios from 'axios';


export default axios.create({
    baseURL: 'https://lendsqr-assess.herokuapp.com/',
    params: {
        maxResults: 20,
        
    }
});