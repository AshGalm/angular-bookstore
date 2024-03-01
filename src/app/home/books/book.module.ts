import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';


const bookRoute: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {path:'details/:id',
  component:BookDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(bookRoute)],
  exports: [RouterModule],
  declarations: [],
})
export class BookModule {}
