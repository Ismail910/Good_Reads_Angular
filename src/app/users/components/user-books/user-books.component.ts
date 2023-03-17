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
  userId!:number

  constructor(
    private ActvetedRoute: ActivatedRoute,
    private bookService: BookServiceService,
    ){
    this.ActvetedRoute.paramMap.subscribe((parmMap)=>{
      parmMap.get('id')
      this.status = parmMap.get('status') || "notRead"
      this.userId = parseInt(parmMap.get('userId') ||  "1")



    })
  }

  ngOnInit(): void {


  this.bookService.getAllBooks().subscribe( books =>{
    this.books = books
   })


  this.ActvetedRoute.paramMap.subscribe((paramMap)=>{
    this.bookService.getBook(paramMap.get('id') || '1').subscribe((book) =>{
      this.book = book
      console.log(book)
      })
   })
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.bookService.getBooksByStatus(this.status , this.userId).subscribe( books =>{
      this.books = books

     })

  }



}
