import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Books } from '../books';

@Component({
  selector: 'app-student-book-list',
  templateUrl: './student-book-list.component.html',
  styleUrls: ['./student-book-list.component.css']
})
export class StudentBookListComponent {

  books: Books[];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  ngAfterViewInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
      $(function () {
        $('#table').DataTable();
      });
    });
  }

  private getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

}
