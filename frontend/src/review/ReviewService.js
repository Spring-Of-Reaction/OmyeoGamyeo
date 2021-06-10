import axios from 'axios';

const review_url="/review"  
const headers ={
        'Content-type':'application/json',
        'X-AUTH-TOKEN':localStorage.getItem('jwt')
    }

class ReviewService {
    

    getReview(){
        return axios.get(review_url,{headers});
    }

    createReview(review){
        return axios.post(review_url,review,{headers});
    }

    getOneReview(id){
        return axios.get(review_url+'/'+id,{headers});
    }

    updateReview(id,review){
        return axios.put(review_url+'/'+id,review,{headers});
    }

    searchUPost(keyword){
        return axios.get(review_url+'/search/univ/?univName='+keyword,{headers});
    }
    searchSPost(keyword){
        return axios.get(review_url+'/search/subject/?subjectName='+keyword,{headers});
    }

    deleteReview(id){
        return axios.delete(review_url+'/'+id,{headers});
    }

    reviewscrap(id){
        return axios.post('/api/scrap/'+id,{ },{headers});
    }
    
}

export default new ReviewService();
