package com.project.backend.post.domain.repository;

import com.project.backend.post.domain.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Long> {
    @Query("SELECT p FROM Post p ORDER BY p.pid DESC")
    List<Post> findAllDesc();
}
//JpaRepository<Entity 클래스, PK 타입> 상속시 기본 CRUD 메소드 자동 생성
//SpringDataJpa에서 제공하지 않는 메소드는 쿼리로 작성해도 된다. DESC가 여기서는 내림차순, ASC는 오름차순