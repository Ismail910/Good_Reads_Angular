import { Book } from '../../../@shared/model/book';
import { BookServiceService } from './../../../services/user/book-service.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnChanges,OnInit{

  books?:any
  book?:Book;
  status!:string
  userId!:string
  bookId!:string

  constructor(
    private ActvetedRoute: ActivatedRoute,
    private bookService: BookServiceService,
    ){
    this.ActvetedRoute.paramMap.subscribe((parmMap)=>{
     this.bookId =  parmMap.get('id') || ''
      this.status = parmMap.get('status') || "notRead"
      this.userId = parmMap.get('userId') ||  ""
    })
  }

  ngOnInit(): void {

  this.bookService.getAllBooks(this.userId).subscribe( books =>{
    this.books = books
    console.log(books);
    console.log("this user id" , this.userId);
   })
   }


  ngOnChanges(changes: SimpleChanges): void {

    this.bookService.getBooksByStatus(this.status , this.userId).subscribe( books =>{
      this.books = books

     })

  }



}
