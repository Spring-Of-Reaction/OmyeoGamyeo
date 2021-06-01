import axios from 'axios';

const post_url="/user/mypage"  
const headers ={
    'Content-type':'application/json',
    'X-AUTH-TOKEN':localStorage.getItem('user')
}

class MypageService {

    getMylist(){
        return axios.get(post_url+'/post',{headers});
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
        return axios.put(post_url+'/update',UserInform,{headers});
    }
  

  
}

export default new MypageService();
