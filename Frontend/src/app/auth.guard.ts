import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.loginService.getIsAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['/admin/login']);
      return false;
    }
    return true;
  }
}



