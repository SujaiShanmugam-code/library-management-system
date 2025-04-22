package com.spring.boot.model;

import jakarta.persistence.*;

@Entity
@Table(name="borrowed-books")
public class borrowed {
    public borrowed() {
    }

    public borrowed(String sname, String email, String b_book, String b_date, String d_date) {
        this.sname = sname;
        this.email = email;
        this.b_book = b_book;
        this.b_date = b_date;
        this.d_date = d_date;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="sname")
    private String sname;

    @Column(name="email")
    private String email;

    @Column(name="b_book")
    private String b_book;

    @Column(name="b_date")
    private String b_date;

    @Column(name="d_date")
    private String d_date;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getB_book() {
        return b_book;
    }

    public void setB_book(String b_book) {
        this.b_book = b_book;
    }

    public String getB_date() {
        return b_date;
    }

    public void setB_date(String b_date) {
        this.b_date = b_date;
    }

    public String getD_date() {
        return d_date;
    }

    public void setD_date(String d_date) {
        this.d_date = d_date;
    }
}
