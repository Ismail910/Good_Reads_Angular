import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/user/category.service';
import { Book } from 'src/app/@shared/model/book';
import { ApiService } from 'src/app/@core/api.service';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/@shared/model/user';
import { AuthService } from 'src/app/services/user/auth.service';
@Component({
  selector: 'app-user-category-details',
  templateUrl: './user-category-details.component.html',
  styleUrls: ['./user-category-details.component.css'],
})
export class UserCategoryDetailsComponent implements OnInit {
  category!: any;
  categoryID!: string;
  books!: Book[];
  categories!: any;
  userData!: any;
  userID!: User;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private auth: AuthService
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.categoryID = paramMap.get('id') || '';
    });
    this.userData = this.auth.getuser().subscribe((data) => {
      this.userData = data;
      this.userID = this.userData.user._id;
    });
  }
  ngOnInit() {
    this.getCategory();
  }
  getCategory() {
    console.log('skmkd');
    console.log(this.categoryID);
    console.log(this.userID);
    this.api
      .get(`${environment.baseUrl}/category/${this.categoryID}/${this.userID}`)
      .subscribe((aut) => {
        this.category = aut;
        console.log(this.category);
      });
  }
}

// this.activatedRoute.paramMap.subscribe((paramMap) => {
//   //convert ID to int and check to null
//   // this.categoryID =  +paramMap.get('id')! || 1  ;
//   this.categoryService
//     .getCategory(paramMap.get('id'))
//     .subscribe((category) => {
//       this.category = category;
//     });
// });
//To get category name
// this.categoryService.getCategory().subscribe((aut) => {
//   this.categories = aut.data;
//   console.log(this.categories );
// }  );
//To get category books
// this.activatedRoute.paramMap.subscribe((paramMap) => {
//    ID=paramMap.get('id')
// console.log(ID);
//       this.categoryService
//         .getcategorybooks(ID)
//         .subscribe((books) => {
//           this.books = books;
//           console.log(this.books);
//         });
//     });
//   }
// }

// this.activateRoute.paramMap.subscribe((paramMap)=>{
//   this.currentProdId=Number(paramMap.get('id'));
//   this.prod=this.staticProdService.getProductById(this.currentProdId);

// });
