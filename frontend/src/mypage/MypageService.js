import axios from 'axios';

const post_url="/mypage"  
const headers ={
    'X-AUTH-TOKEN': localStorage.getItem('jwt')
}

class MypageService {

    getMylist(){
        return axios.get('/api/post/mypage',{headers});
    }
    getOnePost(no){
        return axios.get(post_url+'/post/'+no,{headers});
    }
    getMyscraplist(){
        return axios.get(post_url+'/scrap',{headers});
    }
    getOneScrap(no){
        return axios.get(post_url+'/scrap/'+no,{headers});
    }

    getUserInform(){
        
        return axios.get(post_url,{headers});
    }

    updateUserInform(UserInform){
        return axios.put(post_url,UserInform,{headers});
    }
  

  
}

export default new MypageService();
