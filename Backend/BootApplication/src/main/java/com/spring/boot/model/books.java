package com.spring.boot.model;

import jakarta.persistence.*;

@Entity
@Table(name="books")
public class books {
    public books() {
    }

    public books(String title, String publisher, String isbn, String availability) {
        this.title = title;
        this.publisher = publisher;
        this.isbn = isbn;
        this.availability = availability;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="title")
    private String title;

    @Column(name="publisher")
    private String publisher;

    @Column(name="isbn")
    private String isbn;

    @Column(name="availability")
    private String availability;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }
}
