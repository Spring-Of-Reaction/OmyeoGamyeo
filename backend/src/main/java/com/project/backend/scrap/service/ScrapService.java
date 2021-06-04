package com.project.backend.scrap.service;

import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
import com.project.backend.review.domain.entity.Review;
import com.project.backend.review.domain.repository.ReviewRepository;
import com.project.backend.scrap.domain.entity.Scrap;
import com.project.backend.scrap.domain.repository.ScrapRepository;
import com.project.backend.security.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestHeader;

@Transactional
@RequiredArgsConstructor
@Service
public class ScrapService {
    private final ScrapRepository scraprepository;
    private final ReviewRepository reviewrepository;

    public boolean addScrap(User user, Long id) {
        Review review = reviewrepository.findById(id).orElseThrow();

        //사용자가 기존에 스크랩한 게시물이 없다면
        if (isNotAlreadyLike(user, review) == null) {
            scraprepository.save(new Scrap(review, user));
            return true;
        }
        //사용자가 기존에 스크랩한 게시물이 있다면 -> 중복처리 : 삭제
        else {
            Scrap scrap = scraprepository.findByUserAndPost(user, review);
            Long sid = scrap.getSid();
            scraprepository.delete(scrap);
            return true;
        }
    }

    private Scrap isNotAlreadyLike(User user, Review review) {
        return scraprepository.findByUserAndPost(user, review);
    }

}

