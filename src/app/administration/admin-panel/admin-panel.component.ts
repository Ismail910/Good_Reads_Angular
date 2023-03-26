import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
   toggle:boolean=false;
  namePage:String=this.router.url;

  constructor(private router:Router){
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
         console.log(val.url);
         this.namePage=(val.url.split('/'))[2];
      }
  });
  }

  sidbar(status:boolean)
  {
    this.toggle=status;
  }





}
