import { User } from 'src/app/@shared/model/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'

})
export class AuthService {
  currentuser = new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient) {

    if(localStorage.getItem('token') != null) {
      this.savecurrentuser();
  }
  }

  register(data:any): Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/register`,data)
  }
  login(data:any): Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/login`,data)
  }


  savecurrentuser()
  {
    let token:any =localStorage.getItem('token')
    this.currentuser.next( jwtDecode(token)) ;
  }

  getuser():Observable<User | null>
  {
    return this.currentuser.asObservable();
  }
}
