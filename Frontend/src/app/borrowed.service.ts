import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Borrowed } from './borrowed';

@Injectable({
  providedIn: 'root'
})
export class BorrowedService {

  public username: string;
  public password: string;

  private baseURL = "http://localhost:8080/api/v1/borrowed";
  
  constructor(private httpClient: HttpClient) { }

  getBorrowed(): Observable<Borrowed[]>{
    return this.httpClient.get<Borrowed[]>(`${this.baseURL}`);
  }

  createBorrowed(borrowed: Borrowed): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, borrowed);
  }

  getBorrowedId(id: number): Observable<Borrowed>{
    return this.httpClient.get<Borrowed>(`${this.baseURL}/${id}`);
  }

  updateBorrowed(id: number, borrowed: Borrowed): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, borrowed);
  }

  deleteBorrowed(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}