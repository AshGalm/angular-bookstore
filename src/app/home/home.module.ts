import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './books/book.routing.module';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home.routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BookRoutingModule
  ]
})
export class HomeModule { }
