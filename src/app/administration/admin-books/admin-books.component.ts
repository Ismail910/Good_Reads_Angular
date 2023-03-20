import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';
import { Book } from 'src/app/@shared/model/book';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit {
  listBooks:Book[]=[];
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.books();
  }
  next=()=>{
    if(this.page<this.totalPages){
      this.page++;
      this.books();
    }

    }

    prev=()=>{
      if(this.page>1){
      this.page--;
      this.books();
      }
    }
    currentPage(p:number)
    {
      this.page=p;
      this.books();
    }


    books()
    {
      this.api.get(`${environment.baseUrl}/book/page/${this.page}`).subscribe(data=>{
        this.listBooks=data.data;
        console.log(data.data);
        this.totalPages=data.pages.totalPages;
        this._pagination=[...Array(this.totalPages).keys()];
      })

    }

}
