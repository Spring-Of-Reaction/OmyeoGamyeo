package com.project.backend.security.service;

import com.project.backend.security.domain.entity.User;
import com.project.backend.security.domain.repository.UserRepository;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CustomUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @SneakyThrows
    @Override
    public UserDetails loadUserByUsername(String username) {
        User member = userRepository.findByEmail(username);
        if(member==null) throw new NotFoundException("멤버가 조회되지않음");
        return userRepository.findByEmail(username);
    }
}
