import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { studentLogin } from '../studentLogin';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  loginForm: FormGroup;
  formSubmitted = false;
  login: studentLogin[];
  invalidLogin = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.getStudentLogins().subscribe(
        login => {
            this.login = login;
        }
    );
    this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        rememberMe: [false]
    });
  }

  handleLogin() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      const login: studentLogin = {
        id: 0,
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        rememberMe: this.loginForm.value.rememberMe
      };
      // modify the following line to match your student authentication endpoint
      this.loginService.loginStudent(login).subscribe(isAuthenticated => {
        if (isAuthenticated) {
          console.log("yes")
          this.router.navigate(['/student/student-home']);
        } else {
          console.log("no")
          this.invalidLogin = true;
        }
      });
    }
  }  
}
