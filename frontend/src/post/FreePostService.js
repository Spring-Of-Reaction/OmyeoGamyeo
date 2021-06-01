import axios from 'axios';

const post_url="/api/post"  
const headers ={
    'Content-type':'application/json',
    'X-AUTH-TOKEN':localStorage.getItem('user')
}

class FreepostService {

    getPost(){
        return axios.get(post_url,{headers});
    }

    createPost(post){
        return axios.post(post_url,post,{headers});
    }
    getPostC(category){
        return axios.get(post_url+'/category/'+category,{headers});
    }
    
    getOnePost(no){
        return axios.get(post_url+'/'+no,{headers});
    }

    updatePost(id,post){
        return axios.put(post_url+'/'+id,post,{headers});
    }

    deletePost(id){
        return axios.delete(post_url+'/'+id,{headers});
    }
    deleteComments(pid,cid){
        return axios.delete(post_url+'/'+pid+'/comment/'+cid,{headers});
    }
    
    searchTPost(keyword){
        return axios.get(post_url+'/search/title/?keyword='+keyword,{headers});
    }
    searchCPost(keyword){
        return axios.get(post_url+'/search/content/?keyword='+keyword,{headers});
    }
    getcomments(id){
        return axios.get(post_url+'/'+id+'/comment',{headers});
    }
    createcomments(id,comments){
        return axios.post(post_url+'/'+id+'/comment',comments,{headers});
    }
}

export default new FreepostService();
