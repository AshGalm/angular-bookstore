import { Component, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  title= "Book List";
  data:any[] = [];
  @Input( {alias:"is_last"})  is_last:boolean = false;

  constructor(private dataService:DataService, private router:Router) {
    this.dataService.getJsonData().subscribe(res => {
      if(this.is_last==true){
        this.data = res as any[]
        this.data = this.data.slice(0, 3);
        console.log('Last 3 books');
      }
      else{
        this.data = res as any[];
        console.log('Not working');
      }
    });
console.log('Book component');
  }

  //  Send to book details page
  bookDetails(id:string, author:string, description:string , book:string, image:string){
    this.router.navigate(['/details',id]
    ,{
      queryParams: {
        'author': author,
        'description':description,
        'book':book,
        'image':image
      }
    },
    );
  }
  //  Send to book details page

}
