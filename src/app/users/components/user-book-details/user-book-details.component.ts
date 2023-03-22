import { AuthService } from 'src/app/services/user/auth.service';
import { User } from './../../../@shared/model/user';
import { environment } from './../../../../environments/environment';
import { ApiService } from './../../../@core/api.service';
import { ReviewService } from './../../../services/user/review.service';
import { BookServiceService } from './../../../services/user/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { Reviews, BookUser } from './../../../@shared/model/book-user';
import { Component, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from './../../auth/login/login.component'

@Component({
  selector: 'app-user-book-details',
  templateUrl: './user-book-details.component.html',
  styleUrls: ['./user-book-details.component.css']
})
export class UserBookDetailsComponent implements OnInit , OnChanges{
  book?:any
  reviews?:Reviews;
  bookId!:string;
  rating!:number;
  status!:string;
  reviewForm: FormGroup;
  user_id!:User
  user_info!:any
  userData!:any
  constructor(
    private Auth: AuthService,
    private ActivatedRoute:ActivatedRoute,
    private BookService:BookServiceService,
    private ReviewsService:ReviewService,
    private Api : ApiService,

    ){
      this.userData = this.Auth.getuser().subscribe(user=>{
        this.userData = user;
        console.log(this.userData);
        console.log(this.userData.user.first_name);
        this.user_id = this.userData.user._id
        this.user_info = this.userData.user


     } )
      console.log("users",this.userData.user);

      this.reviewForm = new FormGroup({
        description: new FormControl('', [Validators.required]),
        like: new FormControl('', [Validators.required])
      });

      this.ActivatedRoute.paramMap.subscribe((paramMap)=>{
        this.bookId = paramMap.get("id") || ""
      })
    }
  ngOnChanges(changes: SimpleChanges): void {
    // this.rating = this.book[0].bookUser.reating
    // console.log(this.book[0].bookUser.reating);
  }


  ngOnInit (): void {
     this.getbook();
    //  console.log(this.userData._id);
  }

  getbook(){
   this.Api.get(`${environment.baseUrl}/book/${this.bookId}`).subscribe(book=>{
    this.book = book
    this.setRatin()
   })
  }

////////// set and get rating
  setRating(star: number ): void {
    this.rating = star
    console.log(this.rating);
    console.log(this.book[0].bookUser.rating);
 }
   setRatin (){
    this.rating = this.book[0].bookUser.rating
  }
  add(stat:any){
    this.status = stat.target.value
    console.log(this.status);
  }
/////// send Rating form to db
  addRating()
  {
    let data = {
      rating:this.rating,
      status:this.status,
      book:this.bookId,
      user:this.user_id
    }
    this.Api.post(`${environment.baseUrl}/bookUser`,data).subscribe(obj=>{
      console.log(obj);
    })
    console.log(data);

  }
  /////// send Reviews form to db
  setReview() {
    let data = {
      user: this.user_id,
      book: this.bookId,
      comment: this.reviewForm.controls['description'].value,
      like:this.reviewForm.controls['like'].value
    }
    this.Api.post(`${environment.baseUrl}/reviews/`, data).subscribe(datad=>{
      console.log(datad);
     
    })
    console.log(data);
    }
    setLikeToReview() {
      let data = {
        user: this.user_id,
        book: this.bookId,
        comment: this.reviewForm.controls['description'].value,
        like:this.reviewForm.controls['like'].value
      }
      this.Api.post(`${environment.baseUrl}/reviews/`, data).subscribe(datad=>{
        console.log(datad);
        console.log("asd");
        console.log(data);
        console.log(this.user_id);
      })
      console.log(data);
      }
}
/*

import { ApiService } from 'src/app/@core/api.service';
import { ReviewService } from './../../../services/user/review.service';
import { BookServiceService } from './../../../services/user/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { Reviews } from './../../../@shared/model/book-user';
import { Book } from './../../../@shared/model/book';
import { Component, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-book-details',
  templateUrl: './user-book-details.component.html',
  styleUrls: ['./user-book-details.component.css']
})
export class UserBookDetailsComponent implements OnInit {
  book:any
  Reviews?:Reviews
  bookId!:string
  rating: number =1
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private BookService:BookServiceService,
    private ReviewsService:ReviewService,
    private Api: ApiService
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
    //this.getbook();
  }

  getbook(){
    this.Api.get(`${environment.baseUrl}/book/${this.bookId}`).subscribe(boo =>{
      this.book = boo
      console.log(this.book);
      console.log(this.bookId);


    })
  }





  // books()
  // {
  //   this.api.get(`${environment.baseUrl}/book/page/${this.page}`).subscribe(data=>{
  //     this.listBooks=data.data;
  //     console.log(data.data);
  //     this.totalPages=data.pages.totalPages;
  //     this._pagination=[...Array(this.totalPages).keys()];
  //   })

  // }

  setRating(star: number ): void {
     this.rating = star
     console.log(this.rating);
     console.log(this.book);
  }

}
*/
