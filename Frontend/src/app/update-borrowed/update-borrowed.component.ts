import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BorrowedService } from '../borrowed.service';
import { Borrowed } from '../borrowed';

@Component({
  selector: 'app-update-borrowed',
  templateUrl: './update-borrowed.component.html',
  styleUrls: ['./update-borrowed.component.css'],
})
export class UpdateBorrowedComponent implements OnInit {
  id: number;
  borrowed: Borrowed = new Borrowed();
  constructor(
    private borrowedService: BorrowedService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.borrowedService.getBorrowedId(this.id).subscribe((data) => {
      this.borrowed = data;
    });
  }

  goToBorrowedList() {
    this.router.navigate(['/admin/borrowed-book-list']);
  }

  Submit() {
    this.borrowedService
      .updateBorrowed(this.id, this.borrowed)
      .subscribe((data) => {
        this.goToBorrowedList();
      });
  }
}
