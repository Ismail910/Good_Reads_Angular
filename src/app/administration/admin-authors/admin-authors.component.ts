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

  listAuthors: Author[] = [];
  selectedImage!:File;
  totalPages: number = 0;
  page: number = 1;
  _pagination: any = [];
  isAdded:boolean=false;
  isEdit:boolean=false;
  error:Boolean=false;
  EAuthor!:Author;

  constructor(private api: ApiService) {



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



  showAuthor(author:Author)
  {
    this.EAuthor=author;
    //console.log(this.EAuthor);

    /*this.editAuthor.get('fName')?.setValue(author.firstName);
    this.editAuthor.get('lName')?.setValue(author.lastName);
    this.editAuthor.get('ID')?.setValue(author.ID);
    this.editAuthor.get('dateBirth')?.setValue(author.dateOfBirth);
    this.editAuthor.get('image')?.setValue(author.photo);*/
  }






}
