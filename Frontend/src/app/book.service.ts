import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public username: string;
  public password: string;

  private baseURL = "http://localhost:8080/api/v1/books";
  
  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Books[]>{
    return this.httpClient.get<Books[]>(`${this.baseURL}`);
  }

  createBooks(books: Books): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, books);
  }

  getBookId(id: number): Observable<Books>{
    return this.httpClient.get<Books>(`${this.baseURL}/${id}`);
  }

  updateBook(id: number, book: Books): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, book);
  }

  deleteBook(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
