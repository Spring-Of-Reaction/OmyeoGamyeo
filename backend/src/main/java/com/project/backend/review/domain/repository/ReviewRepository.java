package com.project.backend.review.domain.repository;


import com.project.backend.review.domain.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

//Review 클래스로 db를 접근하게 해 줄 ReviewRepository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query("SELECT p FROM Review p ORDER BY p.id DESC")
    List<Review> findAllDesc();
    List<Review> findByUnivContaining(String univName);
    List<Review> findBySubjectContaining(String subjectName);
}
