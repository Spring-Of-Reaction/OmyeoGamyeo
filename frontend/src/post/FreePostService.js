import axios from 'axios';

const post_url="/api/post"  

class FreepostService {

    getPost(){
        return axios.get(post_url);
    }

    createPost(post){
        return axios.post(post_url,post);
    }
    getPostC(category){
        return axios.get(post_url+'/category/'+category);
    }
    
    getOnePost(no){
        return axios.get(post_url+'/'+no);
    }

    updatePost(id,post){
        return axios.put(post_url+'/'+id,post);
    }

    deletePost(id){
        return axios.delete(post_url+'/'+id);
    }
    deleteComments(pid,cid){
        return axios.delete(post_url+'/'+pid+'/comment/'+cid);
    }
    
    searchTPost(keyword){
        return axios.get(post_url+'/search/title/?keyword='+keyword);
    }
    searchCPost(keyword){
        return axios.get(post_url+'/search/content/?keyword='+keyword);
    }
    getcomments(id){
        return axios.get(post_url+'/'+id+'/comment');
    }
    createcomments(id,comments){
        return axios.post(post_url+'/'+id+'/comment',comments);
    }
}

export default new FreepostService();
