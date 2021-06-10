package com.project.backend.scrap.service;

import com.project.backend.review.domain.entity.Review;
import com.project.backend.review.domain.repository.ReviewRepository;
import com.project.backend.review.dto.ReviewListResponse;
import com.project.backend.scrap.domain.entity.Scrap;
import com.project.backend.scrap.domain.repository.ScrapRepository;
import com.project.backend.security.domain.entity.User;
import com.project.backend.security.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Transactional
@RequiredArgsConstructor
@Service
public class ScrapService {
    private final ScrapRepository scraprepository;
    private final ReviewRepository reviewrepository;
    private final UserRepository userRepository;

    public boolean addScrap(User user, Long id) {
        Review review = reviewrepository.findById(id).orElseThrow();


        //사용자가 기존에 스크랩한 게시물이 없다면
        if (isNotAlreadyLike(user, review) == null) {
            System.out.println(review.getId());
            //System.out.println(user.getEmail());
            scraprepository.save(new Scrap(review, user));
            return true;
        }
        //사용자가 기존에 스크랩한 게시물이 있다면 -> 중복처리 : 삭제
        else {
            Scrap scrap = scraprepository.findByUser_uidAndReview_id(user.getUid(), review.getId());
            Long sid = scrap.getSid();
            scraprepository.delete(scrap);
            return true;
        }
    }

    private Scrap isNotAlreadyLike(User user, Review review) {
        return scraprepository.findByUser_uidAndReview_id(user.getUid(), review.getId());
    }

    public List<ReviewListResponse> mypageScrap(User user){
        List<Scrap> scraplist = scraprepository.findByUser_uid(user.getUid());
        System.out.println(user.getUid());


        List<ReviewListResponse> reviewlist = new ArrayList<>();
        for (int i = 0; i <scraplist.size(); i++) {
            Review review = scraplist.get(i).getReview();
            reviewlist.add(new ReviewListResponse(review));
        }

        return reviewlist;

    }

}

