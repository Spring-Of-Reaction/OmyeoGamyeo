package com.project.backend.security.service;

import com.project.backend.security.domain.entity.User;
import com.project.backend.security.domain.repository.UserRepository;
import com.project.backend.security.dto.SignInRequest;
import com.project.backend.security.dto.SignInResponse;
import com.project.backend.security.dto.UserRequest;
import com.project.backend.security.dto.UserResponse;
import com.project.backend.security.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;

    public ResponseEntity<SignInResponse> signIn(SignInRequest request) {
        String email = request.getEmail();
        User user = userRepository.findByEmail(email);

        SignInResponse signinResponse = SignInResponse.builder()
                    .uid(user.getUid())
                    .email(user.getEmail())
                    .nickname(user.getNickname())
                    .jwt(jwtTokenProvider.createToken(user.getUsername(), user.getRoles()))
                    .build();

            return ResponseEntity.ok(signinResponse);
        }

    public UserResponse findByUserEmail(String userEmail) {
        log.info(String.valueOf(userEmail));
        User user = userRepository.findByEmail(userEmail);
        if(user==null)
            log.info("유저가 없어요ㅠ");
        return UserResponse.profile(user);
    }

    public void update(UserRequest request, User user) {
        user.update(request.toUserEntity());
        userRepository.save(user);
    }

}
