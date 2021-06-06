package com.project.backend.comment.dto;

import com.project.backend.comment.domain.entity.Comment;
import com.project.backend.post.domain.entity.Post;
import com.project.backend.security.domain.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
@Getter
@Setter
@NoArgsConstructor
public class CommentSaveRequestDto {

    private Integer cid;
    private String c_content;
    private String c_writer;
    private LocalDate date;
    private Post post;
    private User user;


    public CommentSaveRequestDto(String c_content, String c_writer, LocalDate date, Post post, User user){
        this.c_content = c_content;
        this.c_writer = c_writer;
        this.date = date;
        this.post = post;
        this.user = user;
    }


    @Builder
    public Comment toCommentEntity(User user){
        return Comment.builder()
                .c_content(c_content)
                .c_writer(user.getNickname())
                .date(date)
                .post(post)
                .user(user)
                .build();
    }
}
