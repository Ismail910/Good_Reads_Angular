import { environment } from './../../../environments/environment';
import { ApiService } from './../../@core/api.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/@shared/model/icategory';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  formCategory:FormGroup;
  listCategories:ICategory[]=[];
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];


  constructor(private api:ApiService,private fb:FormBuilder)
  {

    this.formCategory=fb.group(
      {
        name:['',[Validators.required]],
      });
  }

  ngOnInit(): void {
    this.categories();
  }


  next=()=>{
  if(this.page<this.totalPages){
    this.page++;
    this.categories();
  }

  }

  prev=()=>{
    if(this.page>1){
    this.page--;
    this.categories();
    }
  }
  currentPage(p:number)
  {
    this.page=p;
    this.categories();
  }



  categories()
  {
    this.api.get(`${environment.baseUrl}/category/page/${this.page}`).subscribe(data=>{
      this.listCategories=data.data;
      this.totalPages=data.pages.totalPages;
      this._pagination=[...Array(this.totalPages).keys()];
    })

  }


  get nameCategory(){
    return this.formCategory.get('name');
  }

  addCategory()
  {
    this.api.postJson(`${environment.baseUrl}/category`,this.formCategory.value).subscribe(
    {
      next:(data)=>{

        console.log(data);
      },
      error:()=>
      {
        console.log("error");
      }

    });
  }

  deleteCategory(id:number)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete(`${environment.baseUrl}/category/${id}`).subscribe({
          next:()=>
          {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            this.categories();
          },
          error:()=>{

          }
        });
      }
    });



  }
}
