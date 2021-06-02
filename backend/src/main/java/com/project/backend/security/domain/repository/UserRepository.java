package com.project.backend.security.domain.repository;

import com.project.backend.security.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email); //login id가 email
    User findByCertified(String certified);
    boolean existsByEmail(String email); //중복 가입 방지

}
