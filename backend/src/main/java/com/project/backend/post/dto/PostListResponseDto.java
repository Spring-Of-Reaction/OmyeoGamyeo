package com.project.backend.post.dto;

import com.project.backend.post.domain.entity.Post;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class PostListResponseDto {
    private Long pid;
    private String nickname;
    private String title;
    private Integer category;
    private Integer views;
    private LocalDate date;

    public PostListResponseDto(Post entity){
        this.pid = entity.getPid();
        this.nickname = entity.getNickname();
        this.title = entity.getTitle();
        this.category = entity.getCategory();
        this.views = entity.getViews();
        this.date = entity.getDate();
    }
}
