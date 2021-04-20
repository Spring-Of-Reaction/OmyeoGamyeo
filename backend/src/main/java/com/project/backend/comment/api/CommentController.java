package com.project.backend.comment.api;

import com.project.backend.comment.domain.entity.Comment;
import com.project.backend.comment.dto.CommentListResponseDto;
import com.project.backend.comment.dto.CommentSaveRequestDto;
import com.project.backend.comment.service.CommentService;
import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
import lombok.RequiredArgsConstructor;
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
    public Comment save(@PathVariable Long pid, @RequestBody CommentSaveRequestDto requestDto){
        return commentService.save(pid, requestDto);

    }

}
