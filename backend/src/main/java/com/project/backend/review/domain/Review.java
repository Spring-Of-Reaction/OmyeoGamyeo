package com.project.backend.review.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)//accesslevel 의 의미는?
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rid;

    @Column(nullable = false)
    private String subjectName;
    private String nickname;
    private String content;
    private String univName;
    private Integer rating;
    private String testType;
    private String professor;
    private String semester;

    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate date;

    //User 객체 연결

    @Builder
    public Review(String subjectName, LocalDate date, String content, String nickname,
                  String univName, Integer rating, String testType, String professor,
                  String semester) {
        this.subjectName = subjectName;
        this.date = date;
        this.content = content;
        this.nickname = nickname;
        this.univName = univName;
        this.rating = rating;
        this.testType = testType;
        this.professor =professor;
        this.semester = semester;
    }

}
