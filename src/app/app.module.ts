import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { BookComponent } from './home/books/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotfindComponent } from './notfind/notfind.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { LoginComponent } from './login/login.component';
import { ShowBooksComponent } from './home/show-books/show-books.component';
import { BookDetailsComponent } from './home/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    NavbarComponent,
    FooterComponent,
    NotfindComponent,
    CarousalComponent,
    LoginComponent,
    ShowBooksComponent,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
