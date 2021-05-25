import axios from 'axios';

const review_url="/review"  


class ReviewService {

    getReview(){
        return axios.get(review_url);
    }

    createReview(review){
        return axios.post(review_url,review);
    }

    getOneReview(id){
        return axios.get(review_url+'/'+id);
    }

    updateReview(id,review){
        return axios.put(review_url+'/'+id,review);
    }

    searchUPost(keyword){
        return axios.get(review_url+'/search/univName/?keyword='+keyword);
    }
    searchSPost(keyword){
        return axios.get(review_url+'/search/subjectName/?keyword='+keyword);
    }

    deleteReview(id){
        return axios.delete(review_url+'/'+id);
    }
}

export default new ReviewService();
