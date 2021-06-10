package com.project.backend.like.api;


import com.project.backend.like.service.LikeService;
import com.project.backend.post.dto.PostListResponseDto;
import com.project.backend.review.dto.ReviewListResponse;
import com.project.backend.security.domain.entity.User;
import com.project.backend.security.domain.repository.UserRepository;
import com.project.backend.security.jwt.JwtTokenProvider;
import com.project.backend.security.security.CurrentUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class LikeController {

    private final LikeService likeService;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;

    @PostMapping("/like/{id}")
    public ResponseEntity<String> addLike(@CurrentUser User user, @PathVariable Long id, HttpServletRequest request) {
        String token = jwtTokenProvider.resolveToken(request);
        String email = jwtTokenProvider.getUserPk(token);
        user = userRepository.findByEmail(email);


        boolean result = false;
        System.out.println(user);
        System.out.println(token);

        if (user != null){
            result = likeService.addLike(user, id);

        }
        return result ?
                new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.BAD_REQUEST);

    }

    @GetMapping("api/like/mypage")
    public List<PostListResponseDto> mypage_like (@CurrentUser User user){
        return likeService.mypageLike(user);
    }
}
