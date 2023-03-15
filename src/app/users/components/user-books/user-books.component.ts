import { BookServiceService } from './../../../services/user/book-service.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnChanges,OnInit{

  constructor(
    private ActvetedRoute: ActivatedRoute,
    private bookService: BookServiceService)
  {
    this.ActvetedRoute.paramMap.subscribe((parmMap)=>{
      parmMap.get('id');
    })
  }



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }


}
