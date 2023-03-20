import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  register(data:any): Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/register`,data)
  }
  login(data:any): Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/login`,data)
  }
}
