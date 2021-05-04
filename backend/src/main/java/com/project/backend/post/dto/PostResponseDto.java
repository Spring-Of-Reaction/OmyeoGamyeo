package com.project.backend.post.dto;

import com.project.backend.post.domain.entity.Post;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class PostResponseDto {

    private Long pid;
    private String nickname;
    private String title;
    private String content;
    private Integer category;
    private Integer views;
    private String filename;
    private String filepath;
    private LocalDate date;

    public PostResponseDto(Post entity){
        this.pid = entity.getPid();
        this.nickname = entity.getNickname();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.category = entity.getCategory();
        this.views = entity.getViews();
        this.filename = entity.getFilename();
        this.filepath = entity.getFilepath();
        this.date = entity.getDate();

    }
}
