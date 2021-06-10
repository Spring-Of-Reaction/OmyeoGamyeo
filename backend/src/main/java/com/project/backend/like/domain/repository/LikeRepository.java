package com.project.backend.like.domain.repository;

import com.project.backend.like.domain.entity.Like;
import com.project.backend.post.domain.entity.Post;
import com.project.backend.scrap.domain.entity.Scrap;
import com.project.backend.security.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
public interface LikeRepository extends JpaRepository<Like, Long> {
    Like findByUserAndPost(User user, Post post);
    List<Like> findByUser_uid(Long uid);
}