import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';


const bookRoute: Routes = [
  {
    path: '',
    component: BookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(bookRoute)],
  exports: [RouterModule],
  declarations: [],
})
export class BookModule {}
