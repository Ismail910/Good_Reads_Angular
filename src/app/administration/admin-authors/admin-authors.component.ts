import { Author } from 'src/app/@shared/model/author';
import { environment } from './../../../environments/environment.development';
import { ApiService } from './../../@core/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent implements OnInit {

  formAuthor: FormGroup;
  listAuthors: Author[] = [];
  selectedImage!:File;
  totalPages: number = 0;
  page: number = 1;
  _pagination: any = [];
  isAdded:boolean=false;
  isEdit:boolean=false;
  error:Boolean=false;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.formAuthor = fb.group(
      {
        fName: ['', [Validators.required]],
        lName: ['', [Validators.required]],
        dateBirth: ['', [Validators.required]],
        image: ['', [Validators.required]]

      });

  }

  ngOnInit(): void {
    this.authors();
  }

  next = () => {
    if (this.page < this.totalPages) {
      this.page++;
      this.authors();
    }

  }

  prev = () => {
    if (this.page > 1) {
      this.page--;
      this.authors();
    }
  }


  currentPage(p: number) {
    this.page = p;
    this.authors();
  }

  authors() {
    this.api.get(`${environment.baseUrl}/admin/author/page/${this.page}`).subscribe(data => {
      this.listAuthors = data.data;
      this.totalPages = data.pages.totalPages;
      this._pagination = [...Array(this.totalPages).keys()];
    })
  }

  uploadImage(event: any) {
   this.selectedImage=event.target.files[0];
   console.log(this.selectedImage);

  }

  addAuthor() {



    let formdata= new FormData();
    let date=(this.dateBirth?.value).replace(/-/g,"/");
    let d="";
    for (let char of date) {


      d= char + d;
    }

    console.log(date);
    formdata.append("firstName", this.firstName?.value);
    formdata.append("lastName", this.lastName?.value);
    formdata.append("dateOfBirth", d);

    formdata.append("photo",this.selectedImage,this.selectedImage.name);

    //const form = new FormData();

    /*const headers = new HttpHeaders({
      'Content-Type': `multipart/form-data; boundary=${formdata._boundary}`,
   });*/

    //headers['Content-Type'] = `multipart/form-data; boundary=${form._boundary}

    this.api.post(`${environment.baseUrl}/admin/author`,formdata).subscribe({
      next: (data) => {
        console.log(data);

      },
      error: () => {

      }
    })

  }

  deleteAuthor(id: Number) {
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
        this.api.delete(`${environment.baseUrl}/admin/author/${id}`).subscribe({
          next: () => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            this.authors();
          },
          error: () => {

          }
        });
      }
    });
  }



  showAuthor(author:any)
  {

  }



  get firstName() {
    return this.formAuthor.get('fName');
  }

  get lastName() {
    return this.formAuthor.get('lName');
  }

  get dateBirth() {
    return this.formAuthor.get('dateBirth');
  }

  get image()
  {
    return this.formAuthor.get("image");
  }







}

