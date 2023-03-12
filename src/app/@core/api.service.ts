import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private ApiUrl='';
  constructor(private httpClient:HttpClient) { }

  get(url: string, body?: {}, includeHeader?: boolean): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.get(`${url}`, {
      headers: headers,
      withCredentials: false,
    });
  }
}
