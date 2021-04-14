package com.project.backend.review.domain;

import com.project.backend.BaseTimeEntity;
import lombok.*;
import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity

public class Review extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String subjectName;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String univName;

    @Column(nullable = false)
    private Integer rating;

    @Column(nullable = false)
    private String testType;

    @Column(nullable = false)
    private String professor;

    @Column(nullable = false)
    private String semester;

    //User 객체 연결

    @Builder
    public Review(String subjectName,String content, String nickname,
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

    public void update(Review review){
        this.subjectName = subjectName;
        this.content = content;
        this.nickname = nickname;
        this.univName = univName;
        this.rating = rating;
        this.testType = testType;
        this.professor =professor;
        this.semester = semester;
    }


}
