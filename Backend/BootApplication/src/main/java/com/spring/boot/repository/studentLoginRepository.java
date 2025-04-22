package com.spring.boot.repository;

import com.spring.boot.model.studentLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface studentLoginRepository extends JpaRepository<studentLogin, Long> {
    Optional<studentLogin> findByEmailAndPassword(String email, String password);
}
