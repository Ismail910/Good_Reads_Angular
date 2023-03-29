import { environment } from 'src/environments/environment.development';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ApiService } from 'src/app/@core/api.service';
import { Author } from 'src/app/@shared/model/author';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-authors',
  templateUrl: './user-authors.component.html',
  styleUrls: ['./user-authors.component.css']
})
export class UserAuthorsComponent implements OnInit,OnChanges {
  authors: any=[]
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];
// searchText: any;
characters: any=[];
showResults:boolean=false;
titlename="author"
  constructor (private spi:ApiService,private http: HttpClient){
  }
  ngOnChanges() {

  }

  ngOnInit() {
    /*this.authorService.getAllAuthors()
    .subscribe((aut) => this.authors = aut);*/

    // this.spi.get(`${environment.baseUrl}/admin/author`).subscribe(data=>{
    //   this.characters=data;;
    //   });

    this.getAuthor();
  }

  getAuthor(){
    this.spi.get(`${environment.baseUrl}/admin/author/page/1`).subscribe(data=>{
      this.authors=data;
      this.totalPages=data.pages.totalPages;
      this._pagination=[...Array(this.totalPages).keys()];})
  }
  search(searchText:string) {
    this.showResults=true;
    
    if(searchText==""){
     
      this.characters=[]
    }else{
      this.http.get<any[]>(`${environment.baseUrl}/admin/author/${searchText}`).subscribe(
        (authors) => {
          this.characters = authors;
        },
        (err) => {
          console.error(err);
        }
      );
    }
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
