package com.project.backend.security.domain.entity;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;


public class UserAdapter implements UserDetails {

        private String email;
        private String name;
        private Collection<? extends GrantedAuthority> authorities;
        private Map<String, Object> attributes;

        public UserAdapter(String email, String name, Collection<? extends GrantedAuthority> authorities){
            this.email = email;
            this.name = name;
            this.authorities = authorities;
        }

        public static UserAdapter create(User user){
            List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));

            return new UserAdapter(
                    user.getEmail(),
                    user.getNickname(),
                    authorities
            );
        }
        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return null;
        }

        public static UserAdapter create(User user, Map<String, Object> attributes) {
            UserAdapter userAdapter = UserAdapter.create(user);
            userAdapter.setAttributes(attributes);
            return userAdapter;
        }

        @Override
        public String getPassword() {
            return null;
        }

        @Override
        public String getUsername() {
            return null;
        }

        @Override
        public boolean isAccountNonExpired() {
            return false;
        }

        @Override
        public boolean isAccountNonLocked() {
            return false;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return false;
        }

        @Override
        public boolean isEnabled() {
            return false;
        }

        public void setAttributes(Map<String, Object> attributes){
            this.attributes = attributes;
        }
    }
