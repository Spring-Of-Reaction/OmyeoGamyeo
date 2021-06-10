package com.project.backend.like.service;

import com.project.backend.like.domain.entity.Like;
import com.project.backend.like.domain.repository.LikeRepository;
import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
import com.project.backend.post.dto.PostListResponseDto;
import com.project.backend.review.domain.entity.Review;
import com.project.backend.review.dto.ReviewListResponse;
import com.project.backend.scrap.domain.entity.Scrap;
import com.project.backend.security.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional
@RequiredArgsConstructor
@Service
public class LikeService {
    private final LikeRepository likeRepository;
    private final PostRepository postRepository;

    public boolean addLike(User user, Long id) {
        Post post = postRepository.findById(id).orElseThrow();

        //사용자가 기존에 스크랩한 게시물이 없다면
        if (isNotAlreadyLike(user, post) == null) {
            likeRepository.save(new Like(post, user));
            return true;
        }
        //사용자가 기존에 스크랩한 게시물이 있다면 -> 중복처리 : 삭제
        else {
            Like like = likeRepository.findByUserAndPost(user, post);
            Long lid = like.getLid();
            likeRepository.delete(like);
            return true;
        }
    }

    private Like isNotAlreadyLike(User user, Post post) {
        return likeRepository.findByUserAndPost(user, post);
    }

    public List<PostListResponseDto> mypageLike(User user){
        List<Like> likelist = likeRepository.findByUser_uid(user.getUid());

        List<PostListResponseDto> postlist = new ArrayList<>();
        for (int i = 0; i <likelist.size(); i++) {
            Post post = likelist.get(i).getPost();
            postlist.add(new PostListResponseDto(post));
        }

        return postlist;

    }

}