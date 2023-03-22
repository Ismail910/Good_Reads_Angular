import { Component, OnChanges, OnInit } from '@angular/core';
import { ICategory } from 'src/app/@shared/model/icategory';
import { CategoryService } from 'src/app/services/user/category.service';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.css']
})
export class UserCategoriesComponent implements OnInit,OnChanges{
 categories!:any
 page!:string
    constructor (private categoryService :CategoryService){
      this.categoryService.getCategories(1).subscribe((aut) => {
        this.categories = aut.data;
        this.page=aut.pages;
        console.log(this.categories );
        console.log(this.page);
        
      }  );
    }
    ngOnChanges() {
  
    }
  
    ngOnInit() {
  //     this.categoryService.getCategories()
  //     .subscribe((aut) => this.categories = aut);
  // console.log(this.categories);
  
    }
  
}
