import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
isLoginUser:boolean = false;
constructor(private _AuthService:AuthService){
_AuthService.currentUser.subscribe(()=>{
  if (_AuthService.currentUser.getValue() !=null ){
    this.isLoginUser = true;
  }
  else{
    this.isLoginUser = false;
  }
})

}
ngOnInit(){}
isLogOut(){
  this._AuthService.logout();
}
}
