package com.project.backend.scrap.domain.repository;

import com.project.backend.review.domain.entity.Review;
import com.project.backend.scrap.domain.entity.Scrap;
import com.project.backend.security.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(readOnly = true)
public interface ScrapRepository extends JpaRepository<Scrap, Long> {
    Scrap findByUserAndReview(User user, Review review);
    List<Scrap> findByUser_uid(Long uid);

}
