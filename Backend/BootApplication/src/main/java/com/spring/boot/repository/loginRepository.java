package com.spring.boot.repository;

import com.spring.boot.model.login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface loginRepository extends JpaRepository<login, Long> {
    Optional<login> findByUsernameAndPassword(String username, String password);
}
