package com.project.backend.review.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.backend.review.domain.entity.Review;
import com.project.backend.security.domain.entity.User;
import lombok.Builder;
import lombok.Getter;
import java.time.LocalDate;


@Getter
public class ReviewResponse {

    private Long uid;
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
    private LocalDate date;
    private User user;


    @Builder
    public ReviewResponse(Long id, String subjectName,String content, String nickname,
                          String univName, Integer rating, String testType, String professor,
                          String semester, LocalDate date, User user) {
        this.id = id;
        this.subjectName = subjectName;
        this.content = content;
        this.nickname = nickname;
        this.univName = univName;
        this.rating = rating;
        this.testType = testType;
        this.professor =professor;
        this.semester = semester;
        this.date = date;
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
        this.date = review.getDate();
        this.nickname = review.getUser().getNickname();
        this.uid = review.getUser().getUid();
    }

}