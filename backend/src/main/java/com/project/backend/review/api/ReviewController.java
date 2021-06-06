package com.project.backend.review.api;

import com.project.backend.review.domain.repository.ReviewRepository;
import com.project.backend.review.dto.ReviewCreateRequest;
import com.project.backend.review.dto.ReviewListResponse;
import com.project.backend.review.dto.ReviewResponse;
import com.project.backend.review.dto.ReviewUpdateRequest;
import com.project.backend.review.service.ReviewService;
import com.project.backend.security.domain.entity.User;
import com.project.backend.security.security.CurrentUser;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;


@RequiredArgsConstructor
@RestController

public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping("/review")
    public ResponseEntity createReview(@RequestBody ReviewCreateRequest request,
                                        @CurrentUser User user){
        Long id = reviewService.create(request, user);
        return ResponseEntity.status(HttpStatus.CREATED)
                .build();
    }


    @PutMapping("/review/{id}")
    public String update(@PathVariable Long id,
                       @RequestBody ReviewUpdateRequest request,@CurrentUser User user) {
        return reviewService.update(id, request, user);
    }

    @DeleteMapping("/review/{id}")
    public String delete(@PathVariable Long id, @CurrentUser User user){
        return reviewService.delete(id, user);
    }

    @GetMapping("/review/{id}")
    public ResponseEntity<ReviewResponse> findById(@PathVariable Long id){
        ReviewResponse reviewResponse = reviewService.findById(id);
        return ResponseEntity.ok(reviewResponse);
    }

    @GetMapping("/review")
    public ResponseEntity<List<ReviewListResponse>> findAll(@PageableDefault(size=5, sort="updateDate") Pageable pageable) {
        List<ReviewListResponse> reviewList = reviewService.findAllDesc(pageable);
        return ResponseEntity.ok(reviewList);
    }

    @GetMapping("/review/search/univ")
    public List searchTitle(@RequestParam("univName") String keyword){
        return reviewService.searchUniv(keyword);
    }

    @GetMapping("/review/search/subject")
    public List searchContent(@RequestParam("subjectName") String keyword){
        return reviewService.searchSubject(keyword);
    }

    @GetMapping("/review/mypage")
    public List mypage_review(@CurrentUser User user){
        return reviewService.mypageReview(user);
    }
}