import { environment } from 'src/environments/environment.development';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ApiService } from 'src/app/@core/api.service';
import { Author } from 'src/app/@shared/model/author';
import { AuthorService } from 'src/app/services/user/author.service';

@Component({
  selector: 'app-user-authors',
  templateUrl: './user-authors.component.html',
  styleUrls: ['./user-authors.component.css']
})
export class UserAuthorsComponent implements OnInit,OnChanges {
  authors!: any
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];
  constructor (private authorService : AuthorService,private spi:ApiService){

  }
  ngOnChanges() {

  }

  ngOnInit() {
    /*this.authorService.getAllAuthors()
    .subscribe((aut) => this.authors = aut);*/

    this.getAuthor();
  }

  getAuthor(){
    this.spi.get(`${environment.baseUrl}/admin/author/page/${this.page}`).subscribe(data=>{
      this.authors=data;
      this.totalPages = data.pages.totalPages;
      this._pagination = [...Array(this.totalPages).keys()];
    })
  }
  next=()=>{
    if(this.page<this.totalPages){
      this.page++;
      this.getAuthor();
    }}
    prev=()=>{
      if(this.page>1){
      this.page--;
      this.getAuthor();
      }
    }

    currentPage(p:number)
    {
      this.page=p;
      this.getAuthor();
    }

}
