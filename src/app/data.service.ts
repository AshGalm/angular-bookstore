import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { Book } from './home/book-details/book-details.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api ='http://195.234.122.131:8220/Controller/'

  constructor(private http:HttpClient) { }




  //
  getBooks(): Observable<any>{
    return this.http.get(this.api + 'all_books');
  }


  // add book
  addBook(authorName:string, bookName:string, quantity:number){
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json, text/plain, */*',
    });
    const params = new HttpParams()
    .set('Name', bookName)
    .set('Quantity', quantity)
    .set('Author', authorName);
    this.http.post(this.api+'add_book',null, {params, headers})
    .subscribe((data) => {

      console.log(data);
    })
  }

// update book
updateBook(selectedBookId:string, authorName:string, bookName:string, quantity:number){
  const headers = new HttpHeaders({
    'Accept': '*/*',
    'Content-Type': 'application/json, text/plain, */*',
  });
  const params = new HttpParams()
  .set('id', selectedBookId)
  .set('BookName', bookName)
  .set('AuthorName', authorName)
  .set('Quantity', quantity);

  this.http.put(this.api+ 'update_book',null, {params, headers})
  .subscribe((data) => {

    console.log(data);
  })
}
// update book


  // delete book
  deleteBook(bookId:string){
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json, text/plain, */*',
    });
    this.http.delete(`${this.api}delete_book/${bookId}`, {headers})
    .subscribe((data) => {

      console.log(data);
    })
  }




  getBook(bookId:String) : Observable<Book>{
    return this.http.get<Book[]>(this.api).pipe(
      map((books: Book[]) => books.find((book: Book) => book.bookId === bookId)),
      filter((book: Book | undefined): book is Book => book !== undefined)
    );
  }



}
