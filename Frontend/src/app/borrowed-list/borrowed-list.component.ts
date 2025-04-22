import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Borrowed } from '../borrowed';
import { BorrowedService } from '../borrowed.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-book-list',
  templateUrl: './borrowed-list.component.html',
  styleUrls: ['./borrowed-list.component.css']
})
export class BorrowedListComponent implements OnInit, AfterViewInit {

  borrowed: Borrowed[];

  constructor(private borrowedService: BorrowedService, private router: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  ngAfterViewInit(): void {
    this.borrowedService.getBorrowed().subscribe(data => {
      this.borrowed = data;
      $(function () {
        $('#table').DataTable();
      });
    });
  }

  private getBooks() {
    this.borrowedService.getBorrowed().subscribe(data => {
      this.borrowed = data;
    });
  }

  updateBooks(id: number) {
    this.router.navigate(['/admin/update-borrowed', id]);
  }

  deleteBorrowed(id: number) {
    this.borrowedService.deleteBorrowed(id).subscribe(data => {
      this.getBooks();
    })
  }
}