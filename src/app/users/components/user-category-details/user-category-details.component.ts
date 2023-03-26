import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/user/category.service';
import { Book } from 'src/app/@shared/model/book';

@Component({
  selector: 'app-user-category-details',
  templateUrl: './user-category-details.component.html',
  styleUrls: ['./user-category-details.component.css'],
})
export class UserCategoryDetailsComponent {
  category!: any;
  categoryID!: number;
  books!: Book[];
  categories!:any

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {
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
    this.categoryService.getCategories(1).subscribe((aut) => {
      this.categories = aut.data;
      console.log(this.categories );  
    }  );
//To get category books
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      var ID=paramMap.get('id')
      // console.log(ID);
      this.categoryService
        .getcategorybooks(ID)
        .subscribe((books) => {
          this.books = books;
          console.log(this.books);
        });
    });
  }
}


// this.activateRoute.paramMap.subscribe((paramMap)=>{
//   this.currentProdId=Number(paramMap.get('id'));
//   this.prod=this.staticProdService.getProductById(this.currentProdId);

// });