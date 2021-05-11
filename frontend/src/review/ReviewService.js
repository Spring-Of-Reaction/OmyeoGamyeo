import axios from 'axios';

const review_url="/review"

class ReviewService {

    getReview(){
        return axios.get(review_url);
    }

    createReview(review){
        return axios.post(review_url,review);
    }
}

export default new ReviewService();
