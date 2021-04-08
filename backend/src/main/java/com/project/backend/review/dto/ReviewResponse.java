package com.project.backend.review.dto;

import com.project.backend.review.domain.Review;
import lombok.Builder;
import lombok.Getter;
import java.time.LocalDate;

@Getter
public class ReviewResponse {


    private String subjectName;
    private String content;
    private String nickname;
    private String univName;
    private Integer rating;
    private String testType;
    private String professor;
    private String semester;
    private LocalDate date;
    private Long rid;

    @Builder
    public ReviewResponse(String subjectName,String content, String nickname,
                               String univName, Integer rating, String testType, String professor,
                               String semester, LocalDate date, Long rid) {
        this.subjectName = subjectName;
        this.content = content;
        this.nickname = nickname;
        this.univName = univName;
        this.rating = rating;
        this.testType = testType;
        this.professor =professor;
        this.semester = semester;
        this.date = date;
        this.rid = rid;
    }

    public ReviewResponse(Review review){
        this.subjectName = review.getSubjectName();
        this.content = review.getContent();
        this.nickname = review.getNickname();
        this.univName = review.getUnivName();
        this.rating = review.getRating();
        this.testType = review.getTestType();
        this.professor = review.getProfessor();
        this.semester = review.getSemester();
        this.date = review.getDate();
        this.rid = review.getRid();
    }


}