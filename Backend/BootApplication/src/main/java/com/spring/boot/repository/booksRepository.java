package com.spring.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring.boot.model.books;
import org.springframework.stereotype.Repository;

@Repository
public interface booksRepository extends JpaRepository<books, Long> {
}
