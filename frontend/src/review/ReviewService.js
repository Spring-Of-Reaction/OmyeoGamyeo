import axios from 'axios';

const review_url="/review"  
const headers ={
        'Content-type':'application/json',
        'X-AUTH-TOKEN':localStorage.getItem('user')
    }

class ReviewService {
    

    getReview(){
        return axios.get(review_url);
    }

    createReview(review){
        return axios.post(review_url,review,{headers});
    }

    getOneReview(id){
        return axios.get(review_url+'/'+id);
    }

    updateReview(id,review){
        return axios.put(review_url+'/'+id,review);
    }

    searchUPost(keyword){
        return axios.get(review_url+'/search/univ/?univName='+keyword);
    }
    searchSPost(keyword){
        return axios.get(review_url+'/search/subject/?subjectName='+keyword);
    }

    deleteReview(id){
        return axios.delete(review_url+'/'+id);
    }

    reviewscrap(id,scrap){
        return axios.put(review_url+'/'+id+'/scrap',scrap);
    }
    reviewlike(id,scrap){
        return axios.put(review_url+'/'+id+'/like',scrap);
    }
}

export default new ReviewService();
