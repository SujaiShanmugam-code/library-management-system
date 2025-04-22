import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Login } from './login';
import { Router } from '@angular/router';
import { studentLogin } from './studentLogin';

const AUTH_STORAGE_KEY = 'my-app-auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8080/api/v1/auth/";
  private isAuthenticated: boolean = false;
  private logins: Login[] = [];
  private studentlogins: studentLogin[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {
    // Check if the user is authenticated on initialization
    const authData = localStorage.getItem(AUTH_STORAGE_KEY);
    if (authData) {
      const isAuthenticated = JSON.parse(authData);
      this.setIsAuthenticated(isAuthenticated);
    }
  }

  getLogins(): Observable<Login[]> {
    return this.httpClient.get<Login[]>(`${this.baseURL}login`);
  }

  login(login: Login): Observable<boolean> {
    return this.getLogins().pipe(
      map(logins => {
        const authenticatedLogin = logins.find(l => l.username === login.username && l.password === login.password);
        if (authenticatedLogin) {
          this.setIsAuthenticated(true);
          return true;
        } else {
          this.setIsAuthenticated(false);
          return false;
        }
      })
    );
  }

  loginStudent(studentlogin: studentLogin): Observable<boolean> {
    return this.getStudentLogins().pipe(
      map(studentlogins => {
        const authenticatedLogin = studentlogins.find(l => l.email === studentlogin.email && l.password === studentlogin.password);
        if (authenticatedLogin) {
          this.setIsAuthenticated(true);
          return true;
        } else {
          this.setIsAuthenticated(false);
          return false;
        }
      })
    );
  }
  
  getStudentLogins(): Observable<studentLogin[]> {
    return this.httpClient.get<studentLogin[]>(`${this.baseURL}student-login`);
  }

  setIsAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
    // Store the isAuthenticated flag in local storage
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(isAuthenticated));
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    this.setIsAuthenticated(false);
    // Remove the isAuthenticated flag from local storage
    localStorage.removeItem(AUTH_STORAGE_KEY);
    this.router.navigate(['/admin/login']);
  }

  studentLogout() {
    this.setIsAuthenticated(false);
    // Remove the isAuthenticated flag from local storage
    localStorage.removeItem(AUTH_STORAGE_KEY);
    this.router.navigate(['/student/student-login']);
  }
}

