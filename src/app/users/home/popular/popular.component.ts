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
  popularCategory:any;

  constructor(private Api: ApiService){

  }

  ngOnInit(): void {
       this.getpopularBook()
<<<<<<< HEAD
      this.getpopularCategory()
=======

      //this.getpopularCategory()

>>>>>>> 2fe4b29a3fdfcd95d9e2fe760f8e4fe85118ab9d
      this.getpopularAuthor()
  }

  getpopularBook(){
    this.Api.get(`${environment.baseUrl}/popular/popularBook`).subscribe(data=>{
      this.popularBook = data;
    })
  }
getpopularCategory(){
    this.Api.get(`${environment.baseUrl}/popular/popularCategory`).subscribe(data=>{
      this.popularCategory = data;
      console.log(this.getpopularCategory)
    })
}

getpopularAuthor(){
  this.Api.get(`${environment.baseUrl}/popular/popularAuthor`).subscribe(data=>{
    this.popularAuthor=data;
    console.log(this.popularAuthor)
  })
}

}
