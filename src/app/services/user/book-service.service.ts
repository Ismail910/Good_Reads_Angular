import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Book} from '../../model/user/book'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor( private Http:HttpClient ){}


// getBooks(/*pageNo: Number*/){
//   this.Http.get<Book[]>(`${environment.baseUrl}/books//page/1`/*+pageNo*/,{
//     observe:'response',
//     headers: new HttpHeaders().set('Authorization','secrt token')
//   })
// }

getBooks():Observable<any>{
  return this.Http.get<any>(`${environment.baseUrl}/home/all/page/1/`/*userid*/, {
   headers : new HttpHeaders().set('Authorization', 'secrt token')
  })
 }


getBook(id:string){
     return this.Http.get<Book>('environment.baseUrl}/books/page'+ id ,
     {
       headers : new HttpHeaders().set('Authorization','secrt token')
     })
   }

}

