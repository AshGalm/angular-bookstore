import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { Subject, interval } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  data:any[] = [];
  bookId:string | undefined;
  authorName:string | undefined;
  bookName:string | undefined;
  quantity:number | undefined;

  declare $: any;
  private destroy$ = new Subject<void>();
  @ViewChild('updateBookModal') updateBookModal!: ElementRef;
  selectedItem: any;
  selectedBookId: string | undefined;

  constructor(private dataService:DataService,private router:Router) {
   }


  //  modal
      //clean Inputs whent it close
      resetForm() {
        this.selectedBookId = '';
        this.authorName = '';
        this.bookName = '';
        this.quantity = undefined;
      }
      //clean whent it close
  //  modal
// Add Book
   addBook() {
    if (this.authorName && this.bookName && this.quantity) {
      this.dataService.addBook( this.authorName, this.bookName, this.quantity);

    } else {
      console.error('Author name, book name, and quantity must be defined');
    }
   }

   // Add Book

// Update Book
// get the book id to modal
SendIdBook(item: any, bookId: string) {
  this.selectedItem = item;
  this.selectedBookId = bookId;
}
// get the book id to modal

    updateBook(){
      if (this.selectedBookId && this.authorName && this.bookName && this.quantity) {
        this.dataService.updateBook(this.selectedBookId, this.authorName, this.bookName, this.quantity);
      } else {
        console.error('Book Id, Author name, book name, and quantity must be defined');
      }
    }
// Update Book


  //  Delete Book
   deleteBook(bookId:string){
    this.dataService.deleteBook(bookId);
    console.log('Book Deleted');

   }

   ngOnInit(): void {
    interval(5000) // Polling every 5 seconds
      .pipe(
        startWith(0), // So that it emits value immediately
        switchMap(() => this.dataService.getBooks()),
        takeUntil(this.destroy$)
      )
      .subscribe(res => {
        this.data = res as any[]
      });
  }
  // Book Details

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









  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
