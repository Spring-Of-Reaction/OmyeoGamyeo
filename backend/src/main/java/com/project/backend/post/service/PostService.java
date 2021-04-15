package com.project.backend.post.service;

import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
import com.project.backend.post.dto.PostResponseDto;
import com.project.backend.post.dto.PostSaveRequestDto;
import com.project.backend.post.dto.PostUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class PostService {
    private final PostRepository postRepository;

    @Transactional
    public Long save(PostSaveRequestDto requestDto){
        return postRepository.save(requestDto.toPostEntity()).getPid();
    }

    @Transactional
    public Long update(Long pid, PostUpdateRequestDto requestDto){
        Post post = postRepository.findById(pid).
                orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+ pid));

        post.update(requestDto.getTitle(), requestDto.getContent(), requestDto.getCategory(), requestDto.getFilename(), requestDto.getFilepath());

        return pid;
    }

    public PostResponseDto findById(Long pid){
        Post entity = postRepository.findById(pid).
                orElseThrow(() -> new
                        IllegalArgumentException("해당 게시글이 없습니다. id=" + pid));

        return new PostResponseDto(entity);
    }

    @Transactional
    public void delete(Long pid){
        Post post = postRepository.findById(pid).
                orElseThrow(()->new
                        IllegalArgumentException("해당 게시글이 없습니다. id" + pid));
        postRepository.delete(post);
    }
}
