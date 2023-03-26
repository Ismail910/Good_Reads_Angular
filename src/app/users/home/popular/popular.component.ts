import { environment } from './../../../../environments/environment';
import { ApiService } from './../../../@core/api.service';
import { Book } from './../../../@shared/model/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit{
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
