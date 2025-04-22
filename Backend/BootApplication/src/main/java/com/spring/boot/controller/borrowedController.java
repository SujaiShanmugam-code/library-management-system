package com.spring.boot.controller;

import com.spring.boot.model.books;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.spring.boot.repository.borrowedRepository;
import com.spring.boot.model.borrowed;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/")
public class borrowedController {

    @Autowired
    private borrowedRepository BorrowedRepository;

    @GetMapping("/borrowed")
    public List<borrowed> getAllBorrowed(){
        return BorrowedRepository.findAll();
    }

    @PostMapping("/borrowed")
    public borrowed createBorrowed(@RequestBody borrowed borrowed){
        return BorrowedRepository.save(borrowed);
    }

    @GetMapping("/borrowed/{id}")
    public ResponseEntity<borrowed> getBorrowedByID(@PathVariable Long id){
        Optional<borrowed> optionalBorrowed = BorrowedRepository.findById(id);
        if(optionalBorrowed.isPresent()) {
            borrowed borrowed = optionalBorrowed.get();
            return ResponseEntity.ok(borrowed);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/borrowed/{id}")
    public ResponseEntity<borrowed> updateBorrowed(@PathVariable Long id, @RequestBody borrowed borrowedDetails) {
        Optional<borrowed> optionalBorrowed = BorrowedRepository.findById(id);
        if (optionalBorrowed.isPresent()) {
            borrowed borrowed = optionalBorrowed.get();
            borrowed.setSname(borrowedDetails.getSname());
            borrowed.setEmail(borrowedDetails.getEmail());
            borrowed.setB_book(borrowedDetails.getB_book());
            borrowed.setB_date(borrowedDetails.getB_date());
            borrowed.setD_date(borrowedDetails.getD_date());
            BorrowedRepository.save(borrowed);
            return ResponseEntity.ok(borrowed);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/borrowed/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable Long id){
        Optional<borrowed> optionalBorrowed = BorrowedRepository.findById(id);
        if (optionalBorrowed.isPresent()) {
            borrowed borrowed = optionalBorrowed.get();
            BorrowedRepository.delete(borrowed);
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
