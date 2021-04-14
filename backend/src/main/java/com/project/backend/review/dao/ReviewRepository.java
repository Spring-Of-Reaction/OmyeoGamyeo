package com.project.backend.review.dao;

import com.project.backend.notice.domain.Notice;
import com.project.backend.review.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

//Review 클래스로 db를 접근하게 해 줄 ReviewRepository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query("SELECT p FROM Notice p ORDER BY p.id DESC")
    List<Review> findAllDesc();
}
