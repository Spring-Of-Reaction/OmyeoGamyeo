package com.project.backend.review.api;

import com.project.backend.review.dto.ReviewCreateRequest;
import com.project.backend.review.dto.ReviewResponse;
import com.project.backend.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;


@RequiredArgsConstructor
@RequestMapping("/review")
@RestController

public class ReviewController {
    public static final String REVIEW_URI = "/review";
    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Void> createReview(@RequestBody ReviewCreateRequest request){
        Long rid = reviewService.create(request);
        return ResponseEntity
                .created(URI.create(REVIEW_URI+"/"+rid))
                .build();
    }

    @GetMapping("/{rid}")
    public ResponseEntity<ReviewResponse> findReviewById(
            @PathVariable Long rid) {
        ReviewResponse reviewResponse = reviewService.findReviewById(rid);
        return ResponseEntity.ok(reviewResponse);
    }

    @GetMapping("/all")
    public ResponseEntity<List<ReviewResponse>> findAllReviews() {
        List<ReviewResponse> reviewResponses = reviewService.findAllReviews();
        return ResponseEntity.ok(reviewResponses);
    }
}
