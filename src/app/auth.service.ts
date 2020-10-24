import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpHeaders: any = {
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  }

  //apiUrl:string ='https://thecatapi.com/';

  constructor(public http: HttpClient ) { }

  getCatImage(): Observable<any> {
    this.httpHeaders.headers['x-api-key']= "0536560e-8005-417d-8dc7-db228661ba15";
    return this.http.get('https://api.thecatapi.com/v1/images/search', this.httpHeaders);
  }
  
  }

