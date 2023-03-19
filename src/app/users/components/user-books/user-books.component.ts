import { ApiService } from 'src/app/@core/api.service';
import { Book } from '../../../@shared/model/book';
import { BookServiceService } from './../../../services/user/book-service.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnChanges,OnInit{

  books!:Book[]
  userId?:string
  status!:string
  bookId!:string
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];
  constructor(
    private ActvetedRoute: ActivatedRoute,
    // private bookService: BookServiceService,
    private Api: ApiService
    ){
    this.ActvetedRoute.paramMap.subscribe((parmMap)=>{
    //  this.bookId =  parmMap.get('id') || ''
      this.status = parmMap.get('status') || "notRead"
      // this.userId = parmMap.get('userId') ||  '6414d8e6b98388bb550de21d'
    })
  }

  ngOnInit(): void {
    this.getBooks()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this. getBooksByStatus()
  }

  getBooks()
    {
      this.Api.get(`${environment.baseUrl}/home/all/page/${this.page}`).subscribe(data=>{ //${this.userId}
        this.books=data.data;
        console.log(this.books);

        this.totalPages=data.pages.totalPages;
        this._pagination=[...Array(this.totalPages).keys()];
      })
    }

    getBooksByStatus()
    {
      this.Api.get(`${environment.baseUrl}/home/page/${this.page}/?${this.status}?${this.userId}`).subscribe( book =>{
        this.books = book.data
       })
    }

   next=()=>{
    if(this.page<this.totalPages){
      this.page++;
      this.getBooks();
    }
    }

    prev=()=>{
      if(this.page>1){
      this.page--;
      this.getBooks();
      }
    }

    currentPage(p:number)
    {
      this.page=p;
      this.getBooks();
    }



 // getBooksByStatus(status:string,userID:string):Observable<any>{
    //   return this.Http.get<Book[]>(`${environment.baseUrl}/home/page/1/?${status}?${userID}` ,{
    //     headers: new HttpHeaders().set('Authorization','secrt token')
    //   })
    // }

  // this.bookService.getAllBooks(this.userId).subscribe( books =>{
  //   this.books = books
  //   console.log(books);
  //   console.log("this user id" , this.userId);
  //  })



}
