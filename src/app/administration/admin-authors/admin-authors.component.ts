import { environment } from './../../../environments/environment.development';
import { ApiService } from './../../@core/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent implements OnInit {

  constructor(private api:ApiService)
  {

  }

  ngOnInit(): void {
   this.api.get(`${environment.baseUrl}/admin/author/page/1`).subscribe(data=>{
    console.log(data);
   })
  }






}
