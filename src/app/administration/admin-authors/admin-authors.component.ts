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
    //test get all
   this.api.get(`${environment.baseUrl}/admin/author/page/1`).subscribe(data=>{
    console.log(data);
   });

   //test get by id

   /*this.api.get(`${environment.baseUrl}/admin/author/1`).subscribe(data=>{
    console.log(data);
   });*/


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






}
