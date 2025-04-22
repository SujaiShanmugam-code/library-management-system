import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import { LoginComponent } from './login/login.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { AuthGuard } from './auth.guard';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentBookListComponent } from './student-book-list/student-book-list.component';
import { StudentAuthGuard } from './studentauth.guard';
import { HomeComponent } from './home/home.component';
import { BorrowedListComponent } from './borrowed-list/borrowed-list.component';
import { CreateBorrowedComponent } from './create-borrowed/create-borrowed.component';
import { UpdateBorrowedComponent } from './update-borrowed/update-borrowed.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "admin/books", component: BookListComponent, canActivate: [AuthGuard] },
  { path: "admin/login", component: LoginComponent },
  { path: "student/student-login", component: StudentLoginComponent },
  { path: "student/student-home", component: StudentHomeComponent, canActivate: [StudentAuthGuard] },
  { path: "student/student-book-list", component: StudentBookListComponent, canActivate: [StudentAuthGuard] },
  { path: "admin/create-books", component: CreateBooksComponent, canActivate: [AuthGuard] },
  { path: "admin/update-books/:id", component: UpdateBooksComponent, canActivate: [AuthGuard] },
  { path: "admin/borrowed-book-list", component: BorrowedListComponent, canActivate: [AuthGuard] },
  { path: "admin/create-borrowed", component: CreateBorrowedComponent, canActivate: [AuthGuard] },
  { path: "admin/update-borrowed/:id", component: UpdateBorrowedComponent, canActivate: [AuthGuard] },
  { path: "admin/dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

