import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-admin-books-add',
  templateUrl: './admin-books-add.component.html',
  styleUrls: ['./admin-books-add.component.css']
})
export class AdminBooksAddComponent  implements OnInit {

  categoryList:any;
  authorList:any;
  constructor(private api:ApiService)
  {

  }
  ngOnInit(): void {

    this.api.get(`${environment.baseUrl}/admin/author`).subscribe({
      next:(data)=>{
        this.authorList=data;
      },
      error:()=>{

      }
    });

  }



}
