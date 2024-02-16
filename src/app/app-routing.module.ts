import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { BookComponent } from './home/books/book/book.component';
import { NotfindComponent } from './notfind/notfind.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'books', component: BookComponent},

  {path:'**',pathMatch:'full', component: NotfindComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
