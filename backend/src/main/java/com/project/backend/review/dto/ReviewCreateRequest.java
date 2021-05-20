package com.project.backend.review.dto;
import com.project.backend.review.domain.entity.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReviewCreateRequest {

    private String subjectName;
    private String content;
    private String nickname;
    private String univName;
    private Integer rating;
    private String testType;
    private String professor;
    private String semester;

    public ReviewCreateRequest(String subjectName,String content, String nickname,
                               String univName, Integer rating, String testType, String professor,
                               String semester) {
        this.subjectName = subjectName;
        this.content = content;
        this.nickname = nickname;
        this.univName = univName;
        this.rating = rating;
        this.testType = testType;
        this.professor =professor;
        this.semester = semester;
    }

    public Review toReviewEntity() {
        return Review.builder()
                .subjectName(subjectName)
                .content(content)
                .nickname(nickname)
                .univName(univName)
                .rating(rating)
                .testType(testType)
                .professor(professor)
                .semester(semester)
                .build();
    }
}
