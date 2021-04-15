package com.project.backend.post.domain.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;

@Getter
@NoArgsConstructor
@Entity
public class Post {

    @Id //PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment 가능
    private Long pid;

    @Column(nullable = false)
    private String nickname;
    private String title;
    private String content;
    private Integer category;
    private Integer views;

    private String filename;
    private String filepath;
    //동일한 파일이름 저장시 오류 발생하므로 파일이름과 경로를 분리함
    //nullable 등 추가 옵션 없어서 @Column 사용 안 함

    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate date;


    @Builder
    public Post(String nickname, String title, String content, LocalDate date, Integer category, Integer views, String filename, String filepath){
        this.nickname = nickname;
        this.title = title;
        this.content = content;
        this.date = date;
        this.category = category;
        this.views = views;
        this.filename = filename;
        this.filepath = filepath;
    }
    //수정시에 바뀔 수 있는 것만 값만 지정
    public void update(String title, String content, Integer category, String filename, String filepath){
        this.title = title;
        this.content = content;
        this.category = category;
        this.filename = filename;
        this.filepath = filepath;
    }

}
