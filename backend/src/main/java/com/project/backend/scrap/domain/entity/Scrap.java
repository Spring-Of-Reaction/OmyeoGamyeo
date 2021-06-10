package com.project.backend.scrap.domain.entity;

import com.project.backend.review.domain.entity.Review;
import com.project.backend.security.domain.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.persistence.GenerationType;

@Getter
@NoArgsConstructor
@Entity
public class Scrap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sid;

    @ManyToOne
    @JoinColumn
    private Review review;

    @ManyToOne
    @JoinColumn
    private User user;

    public Scrap(Review review, User user){
        this.review = review;
        this.user = user;
    }

}
