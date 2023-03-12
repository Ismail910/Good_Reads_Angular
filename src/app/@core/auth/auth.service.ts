import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogin:boolean=false
  constructor(private api:ApiService) { }

signup(url:string,body:{}):Observable<any>
{

  return this.api.postJson(`${url}`,body);
}

login(url:string,body:{}):Observable<any>
{
  return this.api.postJson(`${url}`,body);
}




}



