package com.project.backend.review.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.backend.review.domain.entity.Review;
import com.project.backend.security.domain.entity.User;
import lombok.Builder;
import lombok.Getter;
import java.time.LocalDate;


@Getter
public class ReviewResponse {

    private Long id;
    private String subjectName;
    private String content;
    private String nickname;
    private String univName;
    private Integer rating;
    private String testType;
    private String professor;
    private String semester;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate createdDate;
    private User user;


    @Builder
    public ReviewResponse(Long id, String subjectName,String content, String nickname,
                          String univName, Integer rating, String testType, String professor,
                          String semester, LocalDate createdDate, User user) {
        this.id = id;
        this.subjectName = subjectName;
        this.content = content;
        this.nickname = nickname;
        this.univName = univName;
        this.rating = rating;
        this.testType = testType;
        this.professor =professor;
        this.semester = semester;
        this.createdDate = createdDate;
        this.user = user;   }

    public ReviewResponse(Review review){
        this.id = review.getId();
        this.subjectName = review.getSubjectName();
        this.content = review.getContent();
        this.nickname = review.getNickname();
        this.univName = review.getUnivName();
        this.rating = review.getRating();
        this.testType = review.getTestType();
        this.professor = review.getProfessor();
        this.semester = review.getSemester();
        this.createdDate = review.getDate();
        this.nickname = review.getUser().getNickname();
    }



    /*@Builder
    public ReviewResponse(Long rid) {
        this.rid = rid;
    }*/

    /*public static ReviewResponse from(Review review){
        return ReviewResponse.builder()
                .subjectName(review.getSubjectName())
                .content(review.getContent())
                .nickname( review.getNickname())
                .univName(review.getUnivName())
                .rating(review.getRating())
                .testType(review.getTestType())
                .semester( review.getSemester())
                .date(review.getDate())
                .rid(review.getRid())
                .build();
    }

    public static List<ReviewResponse> listFrom(List<Review> places){
        return places.stream()
                .map(ReviewResponse::from)
                .collect(Collectors.toList());
    }*/


}