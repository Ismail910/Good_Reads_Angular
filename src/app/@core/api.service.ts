import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  get(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.get(`${url}`, {
      headers
    });

  }

  post(url:string,body:any):Observable<any>
  {
    const headers = new HttpHeaders({
      
        'Content-Type': 'multipart/form-data; boundary=my',
         Accept: '*/*',
        'Access-Control-Allow-Origin': '*',

    });
    const options = {
      headers: headers
    };
     return this.httpClient.post(`${url}`,JSON.stringify(body),options)
    //return this.httpClient.post(url,body, options);

  }


  postJson(url:string,body?:{}):Observable<any>
  {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.post(`${url}`,JSON.stringify(body),
    {
      headers
    });

  }



  put(url:string,body?:{}):Observable<any>
  {

    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.put(`${url}`,JSON.stringify(body),
    {
      headers
    });

  }


  putJson(url:string,body?:{}):Observable<any>
  {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.put(`${url}`,JSON.stringify(body),
    {
      headers
    });

  }


  delete(url:string):Observable<any>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.delete(`${url}`,{headers});

  }


}
