import { User } from 'src/app/@shared/model/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode'
@Injectable({
  providedIn: 'root'

})
export class AuthService {
  currentUser= new BehaviorSubject(null) 
  constructor(private _HttpClient:HttpClient) {

  //   if(localStorage.getItem('token') != null) {
  //     // this.savecurrentuser();
  // }
  }

  register(data:any): Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/register`,data)
  }
  login(data:any): Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/login`,data)
  }


  saveCurrentUser()
  {
    let token:any = localStorage.getItem('token');
    this.currentUser.next(jwtDecode(token))
    console.log(this.currentUser)
  }

  getuser():Observable<User | null>
  {
    return this.currentUser.asObservable();
  }
}
