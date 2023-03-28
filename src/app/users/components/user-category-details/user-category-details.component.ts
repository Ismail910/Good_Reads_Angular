
import { ApiService } from './../../../@core/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/user/category.service';
import { Book } from 'src/app/@shared/model/book';
import { AuthService } from 'src/app/services/user/auth.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-user-category-details',
  templateUrl: './user-category-details.component.html',
  styleUrls: ['./user-category-details.component.css'],
})
export class UserCategoryDetailsComponent implements OnInit{

  categoryID!: string;
  books!: Book[];
  categories?:any
  userData?:any
  userId?:any
  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private Api:ApiService,
    private auth:AuthService
  ) {
    this.auth.getuser().subscribe((user: any)=>{
      this.userData = user;
      this.userId = this.userData.user._id
     })

    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.categoryID = paramMap.get('id') || ""
    });
  }
  ngOnInit(): void {
    this.getcategory()
  }

getcategory(){
  this.Api.get(`${environment.baseUrl}/category/${this.categoryID}/${this.userId}`).subscribe(data=>{
    this.categories = data
    console.log(this.categories);
  })
}



}
