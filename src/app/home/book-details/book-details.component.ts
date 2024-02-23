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
   id:number | undefined;
   author: string | undefined;
   description: string | undefined;
   bookName: string | undefined;
   bookImage: string | undefined;
   book: Book | undefined;

  //  Unsubscribe
  private unsubscribe$ = new Subject<void>();
  //  Unsubscribe

   constructor(private dataService:DataService,private router:ActivatedRoute) {}

   ngOnInit(): void {
    const idParam = this.router.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : undefined;
    this.author = this.router.snapshot.queryParamMap.get('author') || undefined;
    this.description = this.router.snapshot.queryParamMap.get('description') || undefined;
    this.bookName = this.router.snapshot.queryParamMap.get('book') || undefined;
    this.bookImage = this.router.snapshot.queryParamMap.get('image') || undefined;

    if(this.id){
      this.dataService.getBook(this.id)
      .pipe(takeUntil(this.unsubscribe$)
      )
      .subscribe(
        (book:Book) => {
        console.log(book);
        this.book = book;
        this.author = book.author;
        console.log(book.book);
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
