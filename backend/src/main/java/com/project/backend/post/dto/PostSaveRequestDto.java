package com.project.backend.post.dto;
import com.project.backend.post.domain.entity.Post;

import com.project.backend.security.domain.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Getter
@NoArgsConstructor
public class PostSaveRequestDto {
    private Integer pid;
    private String nickname;
    private String title;
    private String content;
    private Integer category;
    private Integer views;
    private String filename;
    private String filepath;
    private LocalDate date;

    @Builder
    public PostSaveRequestDto(Integer pid, String nickname, String title, String content, Integer category, Integer views, String filename, String filepath, LocalDate date){
        this.pid = pid;
        this.nickname = nickname;
        this.title = title;
        this.content = content;
        this.category = category;
        this.views = views;
        this.filename = filename;
        this.filepath = filepath;
        this.date = date;
    }

    public Post toPostEntity(User user){
        return Post.builder()
                .nickname(user.getNickname())
                .title(title)
                .content(content)
                .category(category)
                .views(views)
                .filename(filename)
                .filepath(filepath)
                .date(date)
                .user(user)
                .build();
    }
}
