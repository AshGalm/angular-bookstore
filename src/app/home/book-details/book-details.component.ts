import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from './book-details.model';
import { DataService } from 'src/app/data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent  implements OnInit, OnDestroy{
  bookId:string | undefined;
  authorName: string | undefined;
  quantity: string | undefined;
  bookName: string | undefined;
   book: Book | undefined;

  //  Unsubscribe
  private unsubscribe$ = new Subject<void>();
  //  Unsubscribe

   constructor(private dataService:DataService,private router:ActivatedRoute) {}


  //  Delete Book
  deleteBook(bookId:string){
    this.dataService.deleteBook(bookId);
    console.log('Book Deleted');

   }
  //  Delete Book

   ngOnInit(): void {
    const idParam = this.router.snapshot.paramMap.get('bookId');
    this.bookId = this.router.snapshot.queryParamMap.get('bookId') || undefined;
    this.authorName = this.router.snapshot.queryParamMap.get('authorName') || undefined;
    this.quantity = this.router.snapshot.queryParamMap.get('quantity') || undefined;
    this.bookName = this.router.snapshot.queryParamMap.get('bookName') || undefined;

    if(this.bookId){
      this.dataService.getBook(this.bookId)
      .pipe(takeUntil(this.unsubscribe$)
      )
      .subscribe(
        (book:Book) => {
        console.log(book);
        this.bookName = this.bookName;
        this.authorName = book.authorName;
        console.log(book.bookName);
        console.log('Book details page');
      });
    }else{
      console.log('No id found');
    }

   }
   ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
   }
}
