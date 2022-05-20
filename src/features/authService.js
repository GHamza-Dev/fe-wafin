import axios from 'axios'
import {api} from '../config/config';

const register = async (userData) => {
    var data = JSON.stringify(userData);
      
      var config = {
        method: 'post',
        url: 'http://localhost/wafin/client',
        data : data
      };

    const response = await axios(config)
    console.log(response);return;

    if (response.data) {
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,logout
}

export default authService
