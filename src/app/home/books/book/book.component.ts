import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  title= "Book List";
  data:any[] = [];

  constructor(private dataService:DataService) {
    this.dataService.getJsonData().subscribe(res => {
      this.data = res as any[];
      //get resopned
      console.log(res);
    });
   }

}
