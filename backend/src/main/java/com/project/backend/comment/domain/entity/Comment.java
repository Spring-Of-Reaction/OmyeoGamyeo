package com.project.backend.comment.domain.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.backend.post.domain.entity.Post;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@Entity
public class Comment {

    @Id
    @Column(name="cid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cid;

    private String c_content;
    private String c_writer;

    @ManyToOne //(fetch=FetchType.LAZY) 댓글이 글 로딩시에 안보이게 하려면
    @JoinColumn(name="pid")
    private Post post;

    @CreatedDate
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime dateTime;

    @Builder
    public Comment(String c_content, String c_writer, Post post, LocalDateTime dateTime){
        this.c_content = c_content;
        this.c_writer = c_writer;
        this.post = post;
        this.dateTime = dateTime;
    }


}
