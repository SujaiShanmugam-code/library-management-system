import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BorrowedService } from '../borrowed.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalBooks: number;
  totalBorrowed: number;

  constructor(private bookService: BookService, private borrowedService: BorrowedService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.totalBooks = books.length;
    });
    this.borrowedService.getBorrowed().subscribe(borrowed => {
      this.totalBorrowed = borrowed.length;
    });
  }

}
