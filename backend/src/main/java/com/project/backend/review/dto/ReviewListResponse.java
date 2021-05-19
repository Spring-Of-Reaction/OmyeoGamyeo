package com.project.backend.review.dto;


import com.project.backend.review.domain.entity.Review;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class ReviewListResponse {
    private Long id;
    private String subjectName;
    private String nickname;
    private String univName;
    private LocalDate updateDate;

    public ReviewListResponse(Review review){
        this.id = review.getId();
        this.nickname = review.getNickname();
        this.subjectName= review.getSubjectName();
        this.univName = review.getUnivName();
        this.updateDate = review.getUpdateDate();
    }

}
