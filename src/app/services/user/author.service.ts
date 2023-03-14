import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Author} from '../../model/user/author';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  constructor(private http: HttpClient) { }

  getAllAuthors() :Observable<any> {
   return this.http.get<any>(`${environment.baseUrl}/admin/author/page/1`)
  }
    
}
