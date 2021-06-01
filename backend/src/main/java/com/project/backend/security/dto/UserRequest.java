package com.project.backend.security.dto;


import com.project.backend.security.domain.entity.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class UserRequest {

    private String email;
    private String nickname;
    private String univ;

    private UserRequest(String email, String nickname,
                        String univ){

        this.email = email;
        this.nickname = nickname;
        this.univ = univ;
    }

}
