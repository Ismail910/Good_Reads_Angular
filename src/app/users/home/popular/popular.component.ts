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

  totalPages:number=0;
  page:number=1;
  _pagination:any;
  popularBook:any;
  popularAuthor:any;

  constructor(private Api: ApiService){

  }

  ngOnInit(): void {
      this.getpopularBook()

  }

  getpopularBook(){
    this.Api.get(`${environment.baseUrl}/popular/popularBook`).subscribe(data=>{
      this.popularBook = data;
    })
  }




  
    


}
