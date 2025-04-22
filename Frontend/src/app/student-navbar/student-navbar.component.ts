import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent {

  constructor(public router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.studentLogout();
  }
}
