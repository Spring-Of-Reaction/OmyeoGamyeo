package com.project.backend.security.service;
import com.project.backend.security.domain.entity.User;
import com.project.backend.security.domain.repository.UserRepository;
import javassist.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.util.Collections;
import java.util.Optional;
import java.util.UUID;


@Slf4j
@Service
public class AuthService {
    @Autowired
    private EmailService emailService;

    @Autowired
    private UserRepository userRepository;



        public void sendVerificationMail(User user) throws NotFoundException, MessagingException {

        if(user==null) throw new NotFoundException("멤버가 조회되지 않음");
        UUID uuid = UUID.randomUUID();
        log.info(uuid.toString());
        user.setCertified(uuid.toString());
        userRepository.save(user);
        String nickname=user.getNickname();
        emailService.sendMail(user.getEmail(), uuid.toString(), nickname);
    }

    public void verifyEmail(String key) throws NotFoundException {
        User user = userRepository.findByCertified(key);
        log.info(user.getEmail());
        if(user==null) throw new NotFoundException("멤버가 조회되지않음");
        user.setRoles(Collections.singletonList("ROLE_USER"));
        log.info(user.getRoles().toString());
        userRepository.save(user);
    }

    public User findByEmail(String email){
        return userRepository.findByEmail(email);
    }
}
