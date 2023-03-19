import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/user/category.service';

@Component({
  selector: 'app-user-category-details',
  templateUrl: './user-category-details.component.html',
  styleUrls: ['./user-category-details.component.css']
})
export class UserCategoryDetailsComponent {
  category!: any
  categoryID !: number
  constructor (private categoryService : CategoryService,
                private activatedRoute :ActivatedRoute){
                  this.activatedRoute.paramMap.subscribe((paramMap)=>{
                    //convert ID to int and check to null
                    this.categoryID =  +paramMap.get('id')! || 1  ;
                  })
                 }
  ngOnChanges() {
   
  }

  ngOnInit() {
    this.categoryService.getCategory(this.categoryID)
    .subscribe((aut) => this.category = aut);
    
  }
}
