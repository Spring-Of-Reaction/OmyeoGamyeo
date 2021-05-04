package com.project.backend.comment.dto;

import com.project.backend.comment.domain.entity.Comment;
import com.project.backend.post.domain.entity.Post;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
@NoArgsConstructor
public class CommentSaveRequestDto {

    private Integer cid;
    private String c_content;
    private String c_writer;
    private LocalDateTime dateTime;
    private Post post;


    public CommentSaveRequestDto(String c_content, String c_writer, LocalDateTime dateTime, Post post){
        this.c_content = c_content;
        this.c_writer = c_writer;
        this.dateTime = dateTime;
        this.post = post;
    }


    @Builder
    public Comment toCommentEntity(){
        return Comment.builder()
                .c_content(c_content)
                .c_writer(c_writer)
                .dateTime(dateTime)
                .post(post)
                .build();
    }
}
