package com.spring.boot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.spring.boot.repository.booksRepository;
import com.spring.boot.model.books;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/")
public class booksController {

    @Autowired
    private booksRepository BooksRepository;


    @GetMapping("/login")
    public void login() {

    }
    @GetMapping("/books")
    public List<books> getAllBooks(){
        return BooksRepository.findAll();
    }

    @PostMapping("/books")
    public books createBooks(@RequestBody books book){
        return BooksRepository.save(book);
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<books> getBooksByID(@PathVariable Long id){
        Optional<books> optionalBook = BooksRepository.findById(id);
        if(optionalBook.isPresent()) {
            books book = optionalBook.get();
            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/books/{id}")
    public ResponseEntity<books> updateBooks(@PathVariable Long id, @RequestBody books bookDetails) {
        Optional<books> optionalBook = BooksRepository.findById(id);
        if (optionalBook.isPresent()) {
            books book = optionalBook.get();
            book.setTitle(bookDetails.getTitle());
            book.setPublisher(bookDetails.getPublisher());
            book.setIsbn(bookDetails.getIsbn());
            book.setAvailability(bookDetails.getAvailability());
            BooksRepository.save(book);
            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/books/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable Long id){
        Optional<books> optionalBook = BooksRepository.findById(id);
        if (optionalBook.isPresent()) {
            books book = optionalBook.get();
            BooksRepository.delete(book);
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
