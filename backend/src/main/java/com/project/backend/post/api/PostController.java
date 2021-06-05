package com.project.backend.post.api;

import com.project.backend.post.dto.PostResponseDto;
import com.project.backend.post.dto.PostSaveRequestDto;
import com.project.backend.post.dto.PostUpdateRequestDto;
import com.project.backend.post.service.PostService;
import com.project.backend.security.domain.entity.User;
import com.project.backend.security.security.CurrentUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PostController {

    private final PostService postService;

    @PostMapping("/api/post")
    public ResponseEntity save(@RequestBody PostSaveRequestDto requestDto, @CurrentUser User user){
        Long uid = postService.save(requestDto, user);
        return ResponseEntity.status(HttpStatus.CREATED)
                .build();
    }

    @PutMapping("/api/post/{pid}")
    public String update(@PathVariable Long pid, @RequestBody PostUpdateRequestDto requestDto, @CurrentUser User user){
        return postService.update(pid, requestDto, user);
    }

    @GetMapping("/api/post/{pid}")
    public PostResponseDto findById(@PathVariable Long pid){
        return postService.findById(pid);
    }

    @DeleteMapping("/api/post/{pid}")
    public String delete(@PathVariable Long pid, @CurrentUser User user){
        return postService.delete(pid, user);

    }

    @GetMapping("/api/post")
    public List list(){
        return postService.findAllDesc();
    }

    //category별 1:일상, 2:질문
    @GetMapping("/api/post/category/{category}")
    public List list_category(@PathVariable Integer category){
        return postService.findByCategory(category);}

    @GetMapping("api/post/search/title")
    public List searchTitle(@RequestParam("keyword") String keyword){
        return postService.searchTitle(keyword);
    }

    @GetMapping("api/post/search/content")
    public List searchContent(@RequestParam("keyword") String keyword){
        return postService.searchContent(keyword);
    }

    //@GetMapping("api/post/mypage")
    //public List mypage_post(@RequestBody )

}
