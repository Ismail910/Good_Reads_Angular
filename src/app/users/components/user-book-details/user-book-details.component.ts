import { ReviewService } from './../../../services/user/review.service';
import { BookServiceService } from './../../../services/user/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { Reviews } from './../../../@shared/model/book-user';
import { Book } from './../../../@shared/model/book';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-book-details',
  templateUrl: './user-book-details.component.html',
  styleUrls: ['./user-book-details.component.css']
})
export class UserBookDetailsComponent implements OnInit {
  book?:any
  Reviews?:Reviews
  bookId!:string
  rating: number =1
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private BookService:BookServiceService,
    private ReviewsService:ReviewService,
    ){
      this.ActivatedRoute.paramMap.subscribe((paramMap)=>{
        this.bookId =  paramMap.get("id") || ""
      })

    }
  ngOnInit(): void {

    this.BookService.getBook(this.bookId).subscribe((book) =>{
      this.book = book
      console.log(book)
      console.log(this.bookId);

      })
  }


  setRating(star: number ): void {
     this.rating = star
     console.log(this.rating);
     console.log(this.book);
  }

}
