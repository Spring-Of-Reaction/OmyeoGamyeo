package com.project.backend.security.api;

import com.project.backend.security.domain.entity.RequestVerifyEmail;
import com.project.backend.security.domain.entity.User;
import com.project.backend.security.domain.repository.UserRepository;
import com.project.backend.security.dto.SignInRequest;
import com.project.backend.security.dto.SignInResponse;
import com.project.backend.security.dto.UserRequest;
import com.project.backend.security.dto.UserResponse;
import com.project.backend.security.jwt.JwtTokenProvider;
import com.project.backend.security.security.CurrentUser;
import com.project.backend.security.service.AuthService;

import com.project.backend.security.service.UserService;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Collections;
import java.util.Map;


@RequiredArgsConstructor
@RestController
@Slf4j
public class UserController {
    private final PasswordEncoder passwordEncoder;
    private  final JwtTokenProvider jwtTokenProvider;
    private  final UserRepository userRepository;
    private  final UserService userService;
    private final AuthService authService;

    // 회원가입
    @PostMapping("/join")
    public Long join(@RequestBody Map<String, String> user) {
        return userRepository.save(User.builder()
                .email(user.get("email"))
                .nickname(user.get("nickname"))
                .univ(user.get("univ"))
                .password(passwordEncoder.encode(user.get("password")))
                .roles(Collections.singletonList("ROLE_NOT_PERMITTED")) // 최초 가입시 USER 로 설정
                .build()).getUid();
    }

    //로그인
    @PostMapping("/signin")
    public ResponseEntity<SignInResponse> signIn(@RequestBody SignInRequest request){
        return userService.signIn(request);
    }

    @GetMapping("/logout")
    public void logOut(HttpServletRequest request, HttpServletResponse response) {
        new SecurityContextLogoutHandler().logout(request, response,
                SecurityContextHolder.getContext().getAuthentication());
    }

    @PostMapping("/verify")
    public String verify(@RequestBody RequestVerifyEmail requestVerifyEmail,
                         HttpServletRequest req, HttpServletResponse res) {
        try {
            User user = authService.findByEmail(requestVerifyEmail.getEmail());
            authService.sendVerificationMail(user);
            return "성공적으로 보냈습니다.";
        } catch (Exception exception) {
             return "실패했습니다.";
        }
    }

    @GetMapping("/verify/{key}")
    public RedirectView getVerify(@PathVariable String key) {
        try {
            authService.verifyEmail(key);
            return new RedirectView("http://localhost:3000/");
        } catch (Exception e) {
            return new RedirectView("http://localhost:3000/signin");
        }
    }

    @GetMapping("/mypage")
    public ResponseEntity<UserResponse> findUserInfo(@CurrentUser User user) {
        UserResponse userResponse = userService.findByUserEmail(user.getEmail());
        return ResponseEntity.ok(userResponse);
    }

    @PutMapping(value = "/mypage")
    public ResponseEntity<Void> update(@RequestBody UserRequest request, @CurrentUser User user) {
        userService.update(request, user);
        return ResponseEntity.noContent().build();
    }
}
