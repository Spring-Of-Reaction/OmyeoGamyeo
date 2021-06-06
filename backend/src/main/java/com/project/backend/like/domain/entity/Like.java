package com.project.backend.like.domain.entity;

import com.project.backend.post.domain.entity.Post;
import com.project.backend.security.domain.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.GenerationType;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long lid;

    @ManyToOne(fetch = FetchType.LAZY)
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    public Like(Post post, User user) {
        this.post = post;
        this.user = user;
    }
}
