package com.project.backend.post.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostUpdateRequestDto {

    private String title;
    private String content;
    private Integer category;

    private String filename;
    private String filepath;

    @Builder
    public PostUpdateRequestDto(String title, String content, Integer category, String filename, String filepath){
        this.title = title;
        this.content = content;
        this.category = category;
        this.filename = filename;
        this.filepath = filepath;
    }

    @Builder
    public PostUpdateRequestDto(String title, String content){
        this.title = title;
        this.content = content;
    }


}
