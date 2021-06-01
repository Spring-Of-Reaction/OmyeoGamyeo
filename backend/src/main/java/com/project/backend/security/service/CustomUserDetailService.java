package com.project.backend.security.service;

import com.project.backend.security.domain.entity.User;
import com.project.backend.security.domain.repository.UserRepository;
import javassist.NotFoundException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor(access = AccessLevel.PUBLIC)
public class CustomUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @SneakyThrows
    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) {
        User member = userRepository.findByEmail(username);
        if(member==null) throw new NotFoundException("멤버가 조회되지않음");
        return member;
    }
}
