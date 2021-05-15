import axios from 'axios';

const post_url="/post"  

class FreepostService {

    getPost(){
        return axios.get(post_url);
    }

    createPost(post){
        return axios.post(post_url,post);
    }

    getOnePost(no){
        return axios.get(post_url+'/'+no);
    }
    updatePost(id,post){
        return axios.get(post_url+'/'+id,post);
    }
    deletePost(id){
        return axios.get(post_url+'/'+id);
    }
}

export default new FreepostService();
