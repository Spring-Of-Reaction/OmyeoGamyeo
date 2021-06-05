package com.project.backend.post.service;

import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
import com.project.backend.post.dto.PostListResponseDto;
import com.project.backend.post.dto.PostResponseDto;
import com.project.backend.post.dto.PostSaveRequestDto;
import com.project.backend.post.dto.PostUpdateRequestDto;
import com.project.backend.security.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostService {
    private final PostRepository postRepository;

    @Transactional
    public Long save(PostSaveRequestDto requestDto, User user){
        return postRepository.save(requestDto.toPostEntity(user)).getPid();
    }

    @Transactional
    public String update(Long pid, PostUpdateRequestDto requestDto, User user){
        Post post = postRepository.findById(pid).
                orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+ pid));
        if((post.getUser()).getUid().equals(user.getUid())){
            post.update(requestDto.getTitle(), requestDto.getContent(), requestDto.getCategory(), requestDto.getFilename(), requestDto.getFilepath());
            return "수정이 완료되었습니다.";
        }
        else{
            return post.getUser()+"해당 글쓴이가 아닙니다."+user;
        }


    }

    public PostResponseDto findById(Long pid){
        Post entity = postRepository.findById(pid).
                orElseThrow(() -> new
                        IllegalArgumentException("해당 게시글이 없습니다. id=" + pid));

        return new PostResponseDto(entity);
    }

    @Transactional
    public String delete(Long pid, User user){
        Post post = postRepository.findById(pid).
                orElseThrow(()->new
                        IllegalArgumentException("해당 게시글이 없습니다. id" + pid));
        if((post.getUser()).getUid().equals(user.getUid())){
            postRepository.delete(post);
            return "삭제가 완료되었습니다.";
        }
        else{
            return "해당 글쓴이가 아닙니다.";
        }

    }

    @Transactional(readOnly = true)
    public List<PostListResponseDto> findAllDesc() {
        return postRepository.findAllDesc().stream()
                .map(PostListResponseDto::new) //.map(post-> new PostListResponseDto(post))
                .collect(Collectors.toList());
    }//postRepository 결과로 넘어온 Post의 Stream을 map통해 PostListResponseDto 변환, List로 변환

    @Transactional(readOnly = true)
    public List<PostListResponseDto> findByCategory(Integer category){
        return postRepository.findByCategory(category).stream()
                .sorted(Comparator.comparing(Post::getPid).reversed()) //먼저 만들어진게 아래 오도록
                .map(PostListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<PostListResponseDto> searchTitle(String keyword){
        return postRepository.findByTitleContaining(keyword).stream()
                .sorted(Comparator.comparing(Post::getPid).reversed())
                .map(PostListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<PostListResponseDto> searchContent(String keyword){
        return postRepository.findByContentContaining(keyword).stream()
                .sorted(Comparator.comparing(Post::getPid).reversed())
                .map(PostListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<PostListResponseDto> mypagePost(User user){
        return postRepository.findByUser(user).stream()
                .sorted(Comparator.comparing(Post::getPid).reversed()) //먼저 만들어진게 아래 오도록
                .map(PostListResponseDto::new)
                .collect(Collectors.toList());
    }
}
