package com.project.backend.scrap.domain.repository;

import com.project.backend.post.domain.entity.Post;
import com.project.backend.review.domain.entity.Review;
import com.project.backend.scrap.domain.entity.Scrap;
import com.project.backend.security.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;


@Transactional(readOnly = true)
public interface ScrapRepository extends JpaRepository<Scrap, Long> {
    Scrap findByUserAndPost(User user, Review review);
}
