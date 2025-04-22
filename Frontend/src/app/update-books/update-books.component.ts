import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Books } from '../books';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit{

  id:number;
  books: Books = new Books();
  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookId(this.id).subscribe(data => {this.books=data;} );
  }

  goToBookList(){
    this.router.navigate(['/admin/books']);
  }

  Submit(){
    this.bookService.updateBook(this.id, this.books).subscribe( data =>{
     this.goToBookList();
    });
  }
}
