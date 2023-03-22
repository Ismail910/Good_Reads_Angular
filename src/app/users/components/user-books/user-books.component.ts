import { ApiService } from 'src/app/@core/api.service';
import { Book } from '../../../@shared/model/book';
import { BookServiceService } from './../../../services/user/book-service.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/@shared/model/user';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnChanges,OnInit{

  books!:Book[]
  
  status!:string
  bookId!:string
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];
  userId!:User
  userData?:any
  constructor(
    private Auth: AuthService,
    private ActvetedRoute: ActivatedRoute,
    private bookService: BookServiceService,
    private Api: ApiService
    ){
      this.userData = this.Auth.getuser().subscribe(user=>{
        this.userData = user;
        this.userId = this.userData.user._id
        console.log("user id",this.userData.user._id);})

    this.ActvetedRoute.paramMap.subscribe((parmMap)=>{
     this.bookId =  parmMap.get('id') || ''
      this.status = parmMap.get('status') || "notRead"

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
      this.Api.get(`${environment.baseUrl}/home/all/page/${this.page}/${this.userId}`).subscribe(data=>{
        this.books=data.data;
        console.log(this.books);
        console.log(data);
        this.totalPages=data.pages.totalPages;
        this._pagination=[...Array(this.totalPages).keys()];
        console.log(this.userId);

      })
    }

    getBooksByStatus()
    {
      this.Api.get(`${environment.baseUrl}/home/page/${this.page}/${this.status}${this.userId}`).subscribe( book =>{
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
