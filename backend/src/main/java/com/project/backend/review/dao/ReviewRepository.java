package com.project.backend.review.dao;

import com.project.backend.review.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;

//Review 클래스로 db를 접근하게 해 줄 ReviewRepository
public interface ReviewRepository extends JpaRepository<Review, Long> {



}
