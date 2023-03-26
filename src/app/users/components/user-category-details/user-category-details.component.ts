import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/user/category.service';
import { Book } from 'src/app/@shared/model/book';
import { ApiService } from 'src/app/@core/api.service';
import { environment } from 'src/environments/environment';

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

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private api:ApiService
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.categoryID = paramMap.get('id') || '';
    });
  }
  ngOnInit(): void {
   this.getCategory();
  }
getCategory(){
  this.api.get(`${environment.baseUrl}/category/${this.categoryID}`).subscribe(data=>{
    this.category=data;
    console.log(this.category);
    
  })
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
