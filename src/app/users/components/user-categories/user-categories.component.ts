import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';
import { ICategory } from 'src/app/@shared/model/icategory';
import { CategoryService } from 'src/app/services/user/category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.css']
})
export class UserCategoriesComponent implements OnInit,OnChanges{
 categories!:any
 page!:string

 characters: any=[];
 //showResults:boolean=false;
 titlename="category";
 show:boolean=false;
    constructor (private categoryService :CategoryService,
      private api:ApiService,private http: HttpClient){
      // this.categoryService.getCategories(1).subscribe((aut) => {
      //   this.categories = aut.data;
      //   this.page=aut.pages;
      //   console.log(this.categories );
      //   console.log(this.page);

      // }  );
//________________________



    }

getCategories(){
  this.api.get(`${environment.baseUrl}/category`).subscribe((data)=>{
    console.log(data);
this.categories=data;
  })
}

    ngOnChanges() {

    }

    ngOnInit() {
  //     this.categoryService.getCategories()
  //     .subscribe((aut) => this.categories = aut);
  // console.log(this.categories);

  this.getCategories();

    }

    search(searchText:string) {
      //this.showResults=true;

      if(searchText==""){

        this.characters=[]
      }else{
        this.http.get<any[]>(`${environment.baseUrl}/category/search/${searchText}`).subscribe(
          (category) => {
            this.characters = category;
          },
          (err) => {
            console.error(err);
          }
        );
      }
    }



    showResults(e:any)
    {
      this.show=e;
    }

}
