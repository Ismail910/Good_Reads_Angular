import { ReviewService } from './../../../services/user/review.service';
import { BookServiceService } from './../../../services/user/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { Reviews } from './../../../@shared/model/book-user';
import { Book } from './../../../@shared/model/book';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-book-details',
  templateUrl: './user-book-details.component.html',
  styleUrls: ['./user-book-details.component.css']
})
export class UserBookDetailsComponent {
  book?:Book
  Reviews?:Reviews
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private BookService:BookServiceService,
    private ReviewsService:ReviewService,
    ){

  }

}
