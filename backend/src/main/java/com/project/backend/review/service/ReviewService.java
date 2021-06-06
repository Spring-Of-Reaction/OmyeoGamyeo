package com.project.backend.review.service;


import com.project.backend.review.domain.repository.ReviewRepository;
import com.project.backend.review.domain.entity.Review;
import com.project.backend.review.dto.ReviewCreateRequest;
import com.project.backend.security.domain.entity.User;
import com.project.backend.review.dto.ReviewListResponse;
import com.project.backend.review.dto.ReviewResponse;
import com.project.backend.review.dto.ReviewUpdateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;





@RequiredArgsConstructor
@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;


    @Transactional
    public Long create(ReviewCreateRequest request, User user){
        return reviewRepository.save(request.toReviewEntity(user)).getId();
    }

    @Transactional
    public String update(Long id, ReviewUpdateRequest request,  User user){
        Review review = reviewRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("해당  게시글이 없습니다. id="+id));
        if((review.getUser()).getUid().equals(user.getUid())) {
            review.update(request.getSubjectName(), request.getContent(), request.getNickname(),
                    request.getUnivName(), request.getRating(), request.getTestType()
                    , request.getProfessor(), request.getSemester());
            return "수정이 완료되었습니다.";
        }
        else{
            return review.getUser()+"해당 글쓴이가 아닙니다."+user;
        }
    }

    @Transactional
    public String delete (Long id, User user){
        Review review = reviewRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("해당 사용자가 없습니다. id="+id));
        if(review.getUser().getUid().equals(user.getUid())) {
            reviewRepository.delete(review);
            return "삭제가 완료되었습니다.";
        }
        else
            return "해당 글쓴이가 아닙니다";
    }

    @Transactional(readOnly=true)
    public ReviewResponse findById(Long id){
        Review review = reviewRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));
        return new ReviewResponse(review);
    }

    @Transactional(readOnly = true)
    public List<ReviewListResponse>findAllDesc(Pageable pageable){
        return reviewRepository.findAllDesc(pageable).stream()
                .map(ReviewListResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ReviewListResponse>searchUniv(String keyword){
        return reviewRepository.findByUnivNameContaining(keyword).stream()
                .sorted(Comparator.comparing(Review::getId).reversed())
                .map(ReviewListResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ReviewListResponse>searchSubject(String keyword){
        return reviewRepository.findBySubjectNameContaining(keyword).stream()
                .sorted(Comparator.comparing(Review::getId).reversed())
                .map(ReviewListResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ReviewListResponse> mypageReview(User user){
        return reviewRepository.findByUser(user).stream()
                .sorted(Comparator.comparing(Review::getId).reversed()) //먼저 만들어진게 아래 오도록
                .map(ReviewListResponse::new)
                .collect(Collectors.toList());
    }
}