package com.project.backend.review.domain.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.backend.BaseTimeEntity;
import com.project.backend.security.domain.entity.User;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;

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

    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate date;

    //User 객체 연결
    @ManyToOne
    @JoinColumn
    private User user;

    @Builder
    public Review(String subjectName,String content, String nickname,
                  String univName, Integer rating, String testType, String professor,
                  String semester,User user, LocalDate date) {
        this.subjectName = subjectName;
        this.content = content;
        this.nickname = nickname;
        this.univName = univName;
        this.rating = rating;
        this.testType = testType;
        this.professor = professor;
        this.semester = semester;
        this.user = user;
        this.date = date;
    }

    public void update(String subjectName,String content, String nickname,
                       String univName, Integer rating, String testType, String professor,
                       String semester){
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
