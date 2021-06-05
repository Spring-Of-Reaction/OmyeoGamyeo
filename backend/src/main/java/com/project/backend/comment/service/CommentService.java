package com.project.backend.comment.service;

import com.project.backend.comment.domain.entity.Comment;
import com.project.backend.comment.domain.repository.CommentRepository;
import com.project.backend.comment.dto.CommentListResponseDto;
import com.project.backend.comment.dto.CommentSaveRequestDto;
import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
import com.project.backend.security.domain.entity.User;
import com.project.backend.security.security.CurrentUser;
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
    public Long save(Long pid, CommentSaveRequestDto requestDto, User user) {
        Optional<Post> postItem = postRepository.findById(pid);
        requestDto.setPost(postItem.get());
        return commentRepository.save(requestDto.toCommentEntity(user)).getCid();
    }

    @Transactional
    public List<CommentListResponseDto> getAllComments(Long pid){
        Post post = postRepository.findById(pid).get();
        return commentRepository.findCommentByPost(post).stream()
                .map(CommentListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public String delete(Long pid, Long cid, User user){
        Comment comment = commentRepository.findById(cid)
        .orElseThrow(()->new
                IllegalArgumentException("해당 댓글이 없습니다."));
        if((comment.getUser()).getUid().equals(user.getUid())){
            commentRepository.delete(comment);
            return "댓글이 삭제되었습니다.";
        }
        else{
            return "해당 글쓴이가 아닙니다.";
        }

    }
}
