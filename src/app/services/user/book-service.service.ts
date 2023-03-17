import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Book} from '../../@shared/model/book'

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor( private Http:HttpClient ){}


getBooksByStatus(status:string,userID:number):Observable<any>{
  return this.Http.get<Book[]>(`${environment.baseUrl}/home/page/1/?${status}?${userID}` ,{
    headers: new HttpHeaders().set('Authorization','secrt token')
  })
}

getAllBooks():Observable<any>{
  return this.Http.get<Book[]>(`${environment.baseUrl}/home/all/page/1/`/*userid*/, {
   headers : new HttpHeaders().set('Authorization', 'secrt token')
  })
 }


getBook(idBook:string){
     return this.Http.get<Book>(`${environment.baseUrl}/books/` /*+ idBook*/ ,
     {
       headers : new HttpHeaders().set('Authorization','secrt token')
     })
   }

}

