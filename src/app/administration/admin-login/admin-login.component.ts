import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/auth/auth.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  formLogin:FormGroup;

  constructor(private fb:FormBuilder ,private auth:AuthService,private router:Router){
    this.formLogin=fb.group(
      {
        email:['',[Validators.required]],
        password:['',[Validators.required]],
      }
    );
  }

  get email()
  {
    return this.formLogin.get('email');
  }

  get password()
  {
    return this.formLogin.get('password');
  }

  login()
  {
    this.auth.login(`${environment.baseUrl}/login`,this.formLogin.value).subscribe(
      {
      next:(data)=>{
      localStorage.setItem('token',data.token);
      console.log(data);
      this.router.navigate(['/Admin/Categories']);
      },
      error:()=>
      {

      }

     });

  }

}
