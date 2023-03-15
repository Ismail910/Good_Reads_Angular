import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Book} from '../../@shared/model/book'
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor( private Http:HttpClient ){}

getBooks(){
  this.Http.get<Book[]>('http/local',{
    observe:'response',
    headers: new HttpHeaders().set('Authorization','token')
  })
}

getUser(id:string){
     return this.Http.get<Book>(''+ id ,
     {
       headers : new HttpHeaders().set('Authorization','secrt token')
     })
   }

}

