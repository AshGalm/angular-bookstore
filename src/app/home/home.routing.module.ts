import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'books',
  //   loadChildren: () => import('.../books/books.module').then(m => m.BooksModule)
  // },
  // {
  //   path: 'details',
  //   loadChildren: () => import('./book-details/book-details.module').then(m => m.BookDetailsModule)

  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
