package com.project.backend.scrap.domain.entity;

import com.project.backend.post.domain.entity.Post;
import com.project.backend.security.domain.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.persistence.GenerationType;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Scrap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sid;

    @ManyToOne(fetch = FetchType.LAZY)
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    public Scrap(Post post, User user){
        this.post = post;
        this.user = user;
    }

}
