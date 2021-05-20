package com.project.backend.comment.service;

import com.project.backend.comment.domain.entity.Comment;
import com.project.backend.comment.domain.repository.CommentRepository;
import com.project.backend.comment.dto.CommentListResponseDto;
import com.project.backend.comment.dto.CommentSaveRequestDto;
import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    @Transactional
    public Comment save(Long pid, CommentSaveRequestDto requestDto) {
        Optional<Post> postItem = postRepository.findById(pid);
        requestDto.setPost(postItem.get());
        return commentRepository.save(requestDto.toCommentEntity());
    }

    @Transactional
    public List<CommentListResponseDto> getAllComments(Long pid){
        Post post = postRepository.findById(pid).get();
        return commentRepository.findCommentByPost(post).stream()
                .map(CommentListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public void delete(Long pid, Long cid){
        Comment comment = commentRepository.findById(cid)
        .orElseThrow(()->new
                IllegalArgumentException("해당 댓글이 없습니다."));
        commentRepository.delete(comment);
    }
}
