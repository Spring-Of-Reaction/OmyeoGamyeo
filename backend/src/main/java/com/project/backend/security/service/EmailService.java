package com.project.backend.security.service;

import com.project.backend.security.domain.entity.User;
import com.project.backend.security.domain.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Slf4j
@Service
public class EmailService {
    @Autowired
    private JavaMailSender emailSender;

    @Autowired
    private SpringTemplateEngine templateEngine;

    private UserRepository userRepository;

    public void sendMail(String to, String key, String nickname) throws MessagingException {
        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, "UTF-8");

        helper.setFrom("OmyeoGamyeo");
        helper.setSubject("[오며가며] 회원가입 인증메일입니다✅");
        helper.setTo(to);


        Context context = new Context();
        context.setVariable("nickname",nickname);
        context.setVariable("host", "http://localhost:8080/verify/"); // 메시지소스로 설정해두고 받아쓰면 참 편하다.
        context.setVariable("link", key);
        log.info(key);

        String html = templateEngine.process("mail-template",context);
        helper.setText(html,true);

        emailSender.send(message);

    }
}