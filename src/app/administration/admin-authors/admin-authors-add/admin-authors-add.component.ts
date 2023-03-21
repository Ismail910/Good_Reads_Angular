import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-authors-add',
  templateUrl: './admin-authors-add.component.html',
  styleUrls: ['./admin-authors-add.component.css']
})
export class AdminAuthorsAddComponent {


  formAuthor: FormGroup;
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
        image: ['', [Validators.required]],
      });


        }


  uploadImage(event: any) {
    this.selectedImage=event.target.files[0];
    console.log(this.selectedImage);

   }

  addAuthor() {

    let formdata= new FormData();
    let date=(this.dateBirth?.value).replace(/-/g,"/");
    let newdate="";
    for (let char of date) {
      newdate= char + newdate;
    }

    //console.log(date);
    formdata.append("firstName", this.firstName?.value);
    formdata.append("lastName", this.lastName?.value);
    formdata.append("dateOfBirth", newdate);
    formdata.append("photo",this.selectedImage,this.selectedImage.name);


    this.api.post(`${environment.baseUrl}/admin/author`,formdata).subscribe({
      next:()=>{
        this.isAdded=true;
       // this.authors();
        setTimeout(() => {
          this.isAdded= false;
        }, 3000);
      },
      error:()=>
      {
        this.error=true;
        setTimeout(() => {
          this.error= false;
        }, 3000);
      }
    })

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
