import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor( private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts?userId=1");
  }
}
