package com.project.backend.security.api;

import com.project.backend.security.domain.entity.RequestVerifyEmail;
import com.project.backend.security.domain.entity.User;
import com.project.backend.security.domain.repository.UserRepository;
import com.project.backend.security.dto.UserRequest;
import com.project.backend.security.dto.UserResponse;
import com.project.backend.security.jwt.JwtTokenProvider;
import com.project.backend.security.security.CurrentUser;
import com.project.backend.security.service.AuthService;

import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Collections;
import java.util.Map;


@RequiredArgsConstructor
@RestController
@Slf4j
public class UserController {
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;


    @Autowired
    private AuthService authService;

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

    // 로그인
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> user) throws NotFoundException {
        User member = userRepository.findByEmail(user.get("email"));
        if(member==null) throw new NotFoundException("멤버가 조회되지않음");
        if (!passwordEncoder.matches(user.get("password"), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(member.getUsername(), member.getRoles());
    }

    @PostMapping("/verify")
    public String verify(@RequestBody RequestVerifyEmail requestVerifyEmail, HttpServletRequest req, HttpServletResponse res) {
        try {
            User user = authService.findByEmail(requestVerifyEmail.getEmail());
            authService.sendVerificationMail(user);
            return "성공적으로 보냈습니다.";
        } catch (Exception exception) {
             return "실패했습니다.";
        }
    }

    @GetMapping("/verify/{key}")
    public String getVerify(@PathVariable String key) {
        try {
            authService.verifyEmail(key);
            return "성공적으로 인증메일을 확인했습니다.";
        } catch (Exception e) {
            return "인증메일을 확인하는데 실패했습니다.";
        }
    }

    @GetMapping("/mypage")
    public ResponseEntity<UserResponse> findUserById(HttpServletRequest request) {
        String token = jwtTokenProvider.resolveToken(request);
        String useremail = jwtTokenProvider.getUserPk(token);
        log.info(useremail);
        User user= userRepository.findByEmail(useremail);
        UserResponse userResponse = UserResponse.builder()
                .uid(user.getUid())
                .nickname(user.getNickname())
                .univ(user.getUniv())
                .email(user.getEmail())
                .build();
        return ResponseEntity.ok(userResponse);

    }


    @PutMapping("/mypage")
    public ResponseEntity<Void> update(HttpServletRequest request, @RequestBody UserRequest userRequest) {
        String token = jwtTokenProvider.resolveToken(request);
        String useremail = jwtTokenProvider.getUserPk(token);
        User user= userRepository.findByEmail(useremail);
        log.info(user.getNickname());
        user.update(User.builder()
                .email(userRequest.getEmail())
                .nickname(userRequest.getNickname())
                .univ(userRequest.getUniv())
                .password(user.getPassword())
                .build());
        userRepository.save(user);

        return ResponseEntity.noContent().build();
    }

}
