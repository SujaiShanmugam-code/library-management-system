import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;
  logins: Login[];
  invalidLogin = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginService.getLogins().subscribe((logins) => {
      this.logins = logins;
    });
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }

  handleLogin() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      const login: Login = {
        id: 0,
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
        rememberMe: this.loginForm.value.rememberMe,
      };
      this.loginService.login(login).subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['/admin/books']);
        } else {
          this.invalidLogin = true;
        }
      });
    }
  }
}
