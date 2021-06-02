package com.project.backend.security.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SignInRequest {
    private String email;
    private String password;

    @Builder
    private SignInRequest(String email,
                             String password
    ) {
        this.email = email;
        this.password = password;
    }
}