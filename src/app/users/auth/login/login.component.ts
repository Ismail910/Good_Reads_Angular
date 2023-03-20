import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  error ='';
  constructor(private _AuthService:AuthService ,private _Router:Router){}
  ngOnInit() : void{}
loginForm =new FormGroup({
  email:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'),
  Validators.email,Validators.required]),
    password:new FormControl(null, [Validators.required,
      // (c: AbstractControl) => Validators.required(c),
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
    ]),
})
submitloginForm(loginForm:FormGroup){
  this._AuthService.login(loginForm.value).subscribe((Response)=>{
    if(Response.message == 'success'){
      localStorage.setItem('token',Response.token);
      this._Router.navigate(['/']);
      
    }
    else {
      console.log(Response.message)
      this.error=Response.message;
    }
  })
}
}
