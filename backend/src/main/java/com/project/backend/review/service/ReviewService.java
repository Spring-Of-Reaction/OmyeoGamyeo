package com.project.backend.review.service;

import com.project.backend.review.domain.Review;
import com.project.backend.review.dto.ReviewCreateRequest;
import com.project.backend.review.dto.ReviewResponse;

import java.util.List;

public interface ReviewService {
    Long create(ReviewCreateRequest request);

    ReviewResponse findReviewById(Long rid);

    List<ReviewResponse> findAllReviews();
}