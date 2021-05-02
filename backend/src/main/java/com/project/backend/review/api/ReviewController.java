package com.project.backend.review.api;

import com.project.backend.review.dto.ReviewCreateRequest;
import com.project.backend.review.dto.ReviewListResponse;
import com.project.backend.review.dto.ReviewResponse;
import com.project.backend.review.dto.ReviewUpdateRequest;
import com.project.backend.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RequiredArgsConstructor
@RestController

public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping("/review")
    public ResponseEntity createReview(@RequestBody ReviewCreateRequest request){
        Long id = reviewService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ReviewResponse.builder()
                        .id(id)
                        .build());
    }


    @PutMapping("/review/{id}")
    public ResponseEntity update(@PathVariable Long id,
                                 @RequestBody ReviewUpdateRequest request){

        reviewService.update(id, request);
        return ResponseEntity.noContent().build();

    }

    @DeleteMapping("/review/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        reviewService.delete(id);
        return ResponseEntity.status(HttpStatus.OK)
                .build();
    }

    @GetMapping("/review/{id}")
    public ResponseEntity<ReviewResponse> findById(@PathVariable Long id){
        ReviewResponse reviewResponse = reviewService.findById(id);

        return ResponseEntity.ok(reviewResponse);
    }

    @GetMapping("/review")
    public ResponseEntity<List<ReviewListResponse>> findAll() {
        List<ReviewListResponse> reviewList = reviewService.findAllDesc();
        return ResponseEntity.ok(reviewList);
    }

    @GetMapping("/review/search/univ")
    public List searchTitle(@RequestParam("univName") String univName){
        return reviewService.searchUniv(univName);
    }

    @GetMapping("/review/search/subject")
    public List searchContent(@RequestParam("subjectName") String subjectName){
        return reviewService.searchSubject(subjectName);
    }
}
