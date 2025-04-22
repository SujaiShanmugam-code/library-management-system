package com.spring.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring.boot.model.borrowed;
import org.springframework.stereotype.Repository;

@Repository
public interface borrowedRepository extends JpaRepository<borrowed, Long> {
}
