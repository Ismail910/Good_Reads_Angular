import { Author } from 'src/app/@shared/model/author';
import { environment } from './../../../environments/environment.development';
import { ApiService } from './../../@core/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent implements OnInit {

  formAuthor: FormGroup;
  listAuthors: Author[] = [];
  totalPages: number = 0;
  page: number = 1;
  _pagination: any = [];
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

  uploadImage(e: any) {

  }
  addAuthor() {

    let formdata: any = new FormData();
    formdata.append("firstName", this.firstName);
    formdata.append("lastName", this.lastName);
    formdata.append("dateBirth", this.dateBirth);

    this.api.post(`${environment.baseUrl}/admin/author`, formdata).subscribe({
      next: () => {

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




  //test delete
  /*this.api.delete(`${environment.baseUrl}/admin/author/1`).subscribe(data=>{
   console.log(data);
  });*/


  // test add author

  /*const author=
  {
   firstName:"apiAuthor",
   lastName:"testapi",
   dateOfBirth:"01/01/1999"
  }

  this.api.postJson(`${environment.baseUrl}/admin/author`,author).subscribe(data=>{
   console.log(data);
  });*/



  /// test update

  /*const author=
  {
   firstName:"apiupdate",
   lastName:"updatetestapi",
  }

  this.api.putJson(`${environment.baseUrl}/admin/author/1`,author).subscribe(data=>{
   console.log(data);
  });*/





}

