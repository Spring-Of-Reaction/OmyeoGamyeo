package com.project.backend.security.dto;


import com.project.backend.security.domain.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
public class UserResponse {

    private Long uid;
    private String password;
    private String email;
    private String nickname;
    private String univ;
    private String certified;


    private UserResponse(Long uid, String password, String email, String nickname,
                        String univ, String certified) {
        this.uid = uid;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.univ = univ;
        this.certified = certified;
    }

    public static UserResponse profile(User user) {
        return UserResponse.builder()
                .uid(user.getUid())
                .password(user.getPassword())
                .email(user.getEmail())
                .nickname(user.getNickname())
                .univ(user.getUniv())
                .build();
    }




}
