package com.project.backend.review.service;

import com.project.backend.review.dao.ReviewRepository;
import com.project.backend.review.domain.Review;
import com.project.backend.review.dto.ReviewCreateRequest;
import com.project.backend.review.dto.ReviewResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository){
        this.reviewRepository = reviewRepository;
    }

    @Transactional
    public Long create(ReviewCreateRequest request) {
        Review review = request.toReviewEntity();
            reviewRepository.save(review);
            return review.getRid();
    }


    @Transactional(readOnly=true)
    public ReviewResponse findReviewById(Long rid) {
        Review review = reviewRepository.findById(rid)
                .orElseThrow(()-> new IllegalArgumentException("해당 사용자가 없습니다. id=" + rid));
        return new ReviewResponse(review);

    }

    @Transactional
    public List<ReviewResponse> findAllReviews() {
        List<Review> review = reviewRepository.findAll();
        return ReviewResponse.listFrom(review);
    }

}
