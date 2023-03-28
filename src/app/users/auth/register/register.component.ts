import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../../../services/user/auth.service';
import { Router } from '@angular/router';
import { passwordMatch } from 'src/validator/passwordMatch';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordRegex = '^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$'
  error:boolean=false
  message?:string=''
  constructor(private _AuthService:AuthService,private _Router:Router){}
  passwordMatching(){
  }
  ngOnInit() : void{
  
  }

registerForm=new FormGroup({
  first_name : new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
  last_name : new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
  email:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'),
Validators.email,Validators.required]),
  password:new FormControl(null, [Validators.required,Validators.minLength(8)
    // Validators.pattern(this.passwordRegex)
  ]),
  confirmPassword:new FormControl(null, [ Validators.required ]),
  img : new FormControl(null)
},[passwordMatch("password","confirmPassword")])

submitRegisterForm(registerForm:FormGroup){
  // this._AuthService.register(registerForm.value).subscribe((response)=>{
  //   if(response.id){
  //     this._Router.navigate(['/login']);
  //   }
  //   else {
  //     console.log("asd")
  //     console.log(response.message)
  //     this.error=response.register.error.message;
  //   }
  // })
  this._AuthService.register(registerForm.value).subscribe({
    next: (Response)=>{
      console.log(Response)
      this._Router.navigate(['/login']);
    },
    error:()=>{
      this.message="User Already Exist. Please Login";
      this.error=true;
      setTimeout(() => {
        this.error=false;
      }, 4000);
    }
  })

}
onFileSelected(event:any) {
  const selectedFile = event.target.files[0];
}
}

