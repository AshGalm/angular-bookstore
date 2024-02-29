import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Book } from '../../book-details/book-details.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy{
  title= "Book List";
  data:any[] = [];
  @Input( {alias:"is_last"})  is_last:boolean = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private dataService:DataService, private router:Router) {

  }
  ngOnInit(): void {
      this.dataService.getBooks()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data:Book[]) => {
      this.data = data;
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  //  Send to book details page
  bookDetails(bookId:string, authorName:string, quantity:string , bookName:string){
    this.router.navigate(['home/details',bookId]
    ,{
      queryParams: {
        "bookId":bookId,
        'authorName': authorName,
        'quantity':quantity,
        'bookName':bookName,
      }
    },
    );
  }
  //  Send to book details page

}
