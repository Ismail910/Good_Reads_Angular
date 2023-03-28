import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css']
})
export class AllBookComponent implements OnInit{
  books!:any
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];

  constructor(private Api: ApiService){


  }
  ngOnInit(): void {
   this.getBooks();

  }

  getBooks()
    {
      this.Api.get(`${environment.baseUrl}/home/all/page/${this.page}`).subscribe(data=>{
        this.books=data.data;
        console.log(this.books);
        console.log(data);
        this.totalPages=data.pages.totalPages;
        this._pagination=[...Array(this.totalPages).keys()];


      })
    }

}
