import { Component, OnInit } from '@angular/core';
import { Borrowed } from '../borrowed'
import { BorrowedService } from '../borrowed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-borrowed',
  templateUrl: './create-borrowed.component.html',
  styleUrls: ['./create-borrowed.component.css']
})
export class CreateBorrowedComponent implements OnInit{

  borrowed: Borrowed = new Borrowed();
  constructor(private borrowedService: BorrowedService, private router: Router){}

  ngOnInit(): void {
    
  }

  saveBorrowed(){
    this.borrowedService.createBorrowed(this.borrowed).subscribe(data=>{
      console.log(data);
      this.goToBorrowedList();
    },error=>console.log(error));
  }

  goToBorrowedList(){
    this.router.navigate(['/admin/borrowed-book-list']);
  }
  Submit(){
    this.saveBorrowed();
  }

}

