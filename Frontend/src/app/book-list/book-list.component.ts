import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, AfterViewInit {

  books: Books[];
  totalRecords: number;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.getBooks();
    this.totalRecords = this.books.length;
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

  updateBooks(id: number) {
    this.router.navigate(['/admin/update-books', id]);
  }

  deleteBooks(id: number) {
    this.bookService.deleteBook(id).subscribe(data => {
      this.getBooks();
    })
  }
}
