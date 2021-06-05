package com.project.backend.scrap.api;

import com.project.backend.review.dto.ReviewListResponse;
import com.project.backend.scrap.service.ScrapService;
import com.project.backend.security.domain.entity.User;
import com.project.backend.security.domain.repository.UserRepository;
import com.project.backend.security.jwt.JwtTokenProvider;
import com.project.backend.security.security.CurrentUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


@Slf4j
@RequiredArgsConstructor
@RestController
public class ScrapController {
    private final ScrapService scrapService;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;

    @PostMapping("/api/scrap/{id}")
    public ResponseEntity<String> addScrap(User user, @PathVariable Long id, HttpServletRequest request) {
        String token = jwtTokenProvider.resolveToken(request);
        String useremail = jwtTokenProvider.getUserPk(token);
        user = userRepository.findByEmail(useremail);


        boolean result = false;
        System.out.println(user);
        System.out.println(token);

        if (user != null){
            result = scrapService.addScrap(user, id);

        }
        return result ?
                new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.BAD_REQUEST);

    }

    @GetMapping("api/scrap/mypage")
    public List<ReviewListResponse> mypage_scrap(@CurrentUser User user){
        return scrapService.mypageScrap(user);
    }


}
