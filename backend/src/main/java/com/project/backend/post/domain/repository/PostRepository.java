package com.project.backend.post.domain.repository;

import com.project.backend.post.domain.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post,Long> {
}
//JpaRepository<Entity 클래스, PK 타입> 상속시 기본 CRUD 메소드 자동 생성