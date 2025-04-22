package com.spring.boot.controller;

import com.spring.boot.model.login;
import com.spring.boot.repository.loginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth/")
public class loginController {

    @Autowired
    private loginRepository LoginRepository;

    @GetMapping("/login")
    public List<login> getLogin(){
        return LoginRepository.findAll();
    }

}



