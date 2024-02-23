import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Book } from './home/book-details/book-details.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public api ='assets/Database/localData.json'

  constructor(private http:HttpClient) { }

  getJsonData(){
    return this.http.get('assets/Database/localData.json');
  }

  getBook(id:number) : Observable<Book>{
    return this.http.get<Book[]>(this.api).pipe(
      map((books: Book[]) => books.find((book: Book) => book.id === id)),
      filter((book: Book | undefined): book is Book => book !== undefined)
    );
  }

}
