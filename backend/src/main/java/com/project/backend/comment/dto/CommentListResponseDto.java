package com.project.backend.comment.dto;

import com.project.backend.comment.domain.entity.Comment;
import com.project.backend.post.domain.entity.Post;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommentListResponseDto {
    private Long cid;
    private String c_content;
    private String c_writer;
    private LocalDateTime dateTime;
    private Long pid;
    //private Post post; Post 객체 하나가 다 들어가는 것이 불필요하다고 느껴 주석처리함

    public CommentListResponseDto(Comment entity){
        this.cid = entity.getCid();
        this.c_content = entity.getC_content();
        this.c_writer = entity.getC_writer();
        this.dateTime = entity.getDateTime();
        this.pid= entity.getPost().getPid();
    }

}
