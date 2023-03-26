import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

  firstName:String|null;
  lastName:string|null;
  constructor()
  {
    this.firstName=localStorage.getItem('fName');
    this.lastName=localStorage.getItem('lName');
  }



}
