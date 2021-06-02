package com.project.backend.security.dto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SignInResponse {
    private Long uid;
    private String email;
    private String nickname;
    private String jwt;

    @Builder
    private SignInResponse(Long uid,String email,
                              String nickname,
                              String jwt
    ) {
        this.uid = uid;
        this.email = email;
        this.nickname = nickname;
        this.jwt = jwt;
    }
}