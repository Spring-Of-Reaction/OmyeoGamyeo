package com.project.backend.comment.domain.repository;

import com.project.backend.comment.domain.entity.Comment;
import com.project.backend.post.domain.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findCommentByPost(Post post);
}
