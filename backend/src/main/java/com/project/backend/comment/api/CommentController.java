package com.project.backend.comment.api;

import com.project.backend.comment.domain.entity.Comment;
import com.project.backend.comment.dto.CommentListResponseDto;
import com.project.backend.comment.dto.CommentSaveRequestDto;
import com.project.backend.comment.service.CommentService;
import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
import com.project.backend.security.domain.entity.User;
import com.project.backend.security.security.CurrentUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
public class CommentController {

    PostRepository postRepository;

    private final CommentService commentService;

    @GetMapping("/api/post/{pid}/comment")
    public List<CommentListResponseDto> getAllComments(@PathVariable Long pid){
        return commentService.getAllComments(pid);
    }

    @PostMapping("/api/post/{pid}/comment")
    public ResponseEntity save(@PathVariable Long pid, @RequestBody CommentSaveRequestDto requestDto, @CurrentUser User user){
        Long cid = commentService.save(pid, requestDto, user);
        return ResponseEntity.status(HttpStatus.CREATED)
                .build();

    }

    @DeleteMapping("/api/post/{pid}/comment/{cid}")
    public String delete(@PathVariable Long pid, @PathVariable Long cid, @CurrentUser User user){
        return commentService.delete(pid, cid, user);
    }

}
