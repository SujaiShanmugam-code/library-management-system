import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {
  books: Books = new Books();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {}

  saveBooks() {
    this.bookService.createBooks(this.books).subscribe(
      (data) => {
        console.log(data);
        this.goToBookList();
      },
      (error) => console.log(error)
    );
  }

  goToBookList() {
    this.router.navigate(['/admin/books']);
  }

  Submit() {
    this.saveBooks();
  }
}
