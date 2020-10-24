import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string ='https://thecatapi.com/';

  constructor(public http: HttpClient ) { }

    public register(): Observable<any>{
      return this.http.get('${this.apiUrl}');
    }
  }

