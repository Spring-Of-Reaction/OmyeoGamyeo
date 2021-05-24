package com.project.backend.post.api;

import com.project.backend.post.dto.PostResponseDto;
import com.project.backend.post.dto.PostSaveRequestDto;
import com.project.backend.post.dto.PostUpdateRequestDto;
import com.project.backend.post.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PostController {

    private final PostService postService;

    @PostMapping("/api/post")
    public Long save(@RequestBody PostSaveRequestDto requestDto){

        return postService.save(requestDto);
    }

    @PutMapping("/api/post/{pid}")
    public Long update(@PathVariable Long pid, @RequestBody PostUpdateRequestDto requestDto){
        return postService.update(pid, requestDto);
    }

    @GetMapping("/api/post/{pid}")
    public PostResponseDto findById(@PathVariable Long pid){
        return postService.findById(pid);
    }

    @DeleteMapping("/api/post/{pid}")
    public Long delete(@PathVariable Long pid){
        postService.delete(pid);
        return pid;
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

}
