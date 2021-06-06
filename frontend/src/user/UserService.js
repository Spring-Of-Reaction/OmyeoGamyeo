import axios from 'axios';

const post_url="/login"  

class UserService {

   

    createUser(user){
        return axios.post('/join',user);
    }

    emailverify(email){
        return axios.post('/verify',email);
    }

    loginUser(user){
        return axios.post('/signin',user);
    }

    
}

export default new UserService();
