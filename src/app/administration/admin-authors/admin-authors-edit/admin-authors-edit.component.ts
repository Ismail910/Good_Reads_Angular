import { Author } from './../../../@shared/model/author';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-admin-authors-edit',
  templateUrl: './admin-authors-edit.component.html',
  styleUrls: ['./admin-authors-edit.component.css']
})
export class AdminAuthorsEditComponent implements  OnChanges{

  @Input()author:any;
  editAuthor:FormGroup;
  selectedImage!:File;
  isEdit:boolean=false;
  error:Boolean=false;

  constructor(private fb: FormBuilder, private api: ApiService)
  {
    this.editAuthor = fb.group(
      {
        fName: ['', [Validators.required]],
        lName: ['', [Validators.required]],
        dateBirth: ['', [Validators.required]],
        image: [''],
        ID:['']
      });
  }
  ngOnChanges(): void {
    this.Author();
  }


  uploadImage(event: any) {
    this.selectedImage=event.target.files[0];
    console.log(this.selectedImage);

   }
  Author()
  {

    this.editAuthor.get('fName')?.setValue(this.author?.firstName);
    this.editAuthor.get('lName')?.setValue(this.author?.lastName);
    this.editAuthor.get('ID')?.setValue(this.author?.ID);
    this.editAuthor.get('dateBirth')?.setValue(this.author?.dateOfBirth);
    this.editAuthor.get('image')?.setValue(this.author?.photo);
  }

  get EfirstName() {
    return this.editAuthor.get('fName');
  }

  get ElastName() {
    return this.editAuthor.get('lName');
  }

  get EdateBirth() {
    return this.editAuthor.get('dateBirth');
  }

  get Eimage()
  {
    return this.editAuthor.get("image");
  }

}
