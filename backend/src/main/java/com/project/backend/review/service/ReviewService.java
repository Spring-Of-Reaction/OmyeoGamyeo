package com.project.backend.review.service;


import com.project.backend.review.domain.repository.ReviewRepository;
import com.project.backend.review.domain.entity.Review;
import com.project.backend.review.dto.ReviewCreateRequest;
import com.project.backend.review.dto.ReviewResponse;
import com.project.backend.review.dto.ReviewUpdateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;





@RequiredArgsConstructor
@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;


    @Transactional
    public Long create(ReviewCreateRequest request){

        return reviewRepository.save(request.toReviewEntity()).getId();
    }

    @Transactional
    public void update(Long id, ReviewUpdateRequest request ){
        Review review = reviewRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("해당 사용자가 없습니다. id="+id));
        review.update(request.toReviewEntity());
    }

    @Transactional
    public void delete (Long id){
        Review review = reviewRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("해당 사용자가 없습니다. id="+id));
        reviewRepository.delete(review);
    }

    @Transactional(readOnly=true)
    public ReviewResponse findById(Long id){
        Review review = reviewRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));
        return new ReviewResponse(review);
    }

    @Transactional(readOnly = true)
    public List<ReviewResponse>findAllDesc(){
        return reviewRepository.findAllDesc().stream()
                .map(ReviewResponse::new)
                .collect(Collectors.toList());
    }
}