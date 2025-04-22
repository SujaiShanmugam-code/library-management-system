package com.spring.boot.controller;

import com.spring.boot.model.studentLogin;
import com.spring.boot.repository.studentLoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth/")
public class studentLoginController {

    @Autowired
    private studentLoginRepository StudentLoginRepository;

    @GetMapping("/student-login")
    public List<studentLogin> getLogin(){
        return StudentLoginRepository.findAll();
    }

}