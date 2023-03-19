import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ICategory}from '../../@shared/model/icategory';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 
  constructor(private http: HttpClient) { }

  getCategories() :Observable<ICategory[]> {
   return this.http.get<ICategory[]>(`${environment.baseUrl}/category`);
  }



  getCategory(id:number){
    return this.http.get<any>(`${environment.baseUrl}/${id}`);


  

  }
}
