import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';
import { BookDetailsComponent } from '../book-details/book-details.component';

const routes: Routes = [

  {
    path: '',
    component: BookComponent
  },
  {
    path: 'details/:id',
    component:  BookDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
