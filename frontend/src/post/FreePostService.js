import axios from 'axios';

const post_url="/post"  

class FreepostService {

    getPost(){
        return axios.get(post_url);
    }

    createPost(posts){
        return axios.post(post_url,posts);
    }

    getOnePost(no){
        return axios.post(post_url+'/'+no);
    }
}

export default new FreepostService();
