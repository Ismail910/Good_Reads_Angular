import { Book } from 'src/app/@shared/model/book';
import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit{

  @Input() book? :any;
  @Output() rating: number = 1 ;


  setRating(star: number ): void {
     this.rating = star
     console.log(this.rating);
     console.log(this.book?.rating);
  }
  ngOnInit(): void {
    // console.log(this.book?.rating );
    this.rating = this.book?.rating


  }

}
