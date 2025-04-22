import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { DataTablesModule } from 'angular-datatables';
import { CreateBooksComponent } from './create-books/create-books.component';
import { FormsModule } from '@angular/forms';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { Router } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentBookListComponent } from './student-book-list/student-book-list.component';
import { HomeComponent } from './home/home.component';
import { BorrowedListComponent } from './borrowed-list/borrowed-list.component';
import { CreateBorrowedComponent } from './create-borrowed/create-borrowed.component';
import { UpdateBorrowedComponent } from './update-borrowed/update-borrowed.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CreateBooksComponent,
    UpdateBooksComponent,
    LoginComponent,
    NavbarComponent,
    StudentLoginComponent,
    StudentNavbarComponent,
    StudentHomeComponent,
    StudentBookListComponent,
    HomeComponent,
    BorrowedListComponent,
    CreateBorrowedComponent,
    UpdateBorrowedComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard, Router],
  bootstrap: [AppComponent]
})
export class AppModule { }
