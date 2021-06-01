package com.project.backend.security.domain.repository;

import com.project.backend.security.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email); //login id가 email
    User findByUid(Long uid);
    User findByCertified(String certified);
    boolean existsByEmail(String email); //중복 가입 방지

}
