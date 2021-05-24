import axios from 'axios';

const post_url="/login"  

class UserService {

   

    createUser(user){
        return axios.post(post_url,user);
    }
    
}

export default new UserService();
