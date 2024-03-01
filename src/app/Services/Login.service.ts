import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api ='http://195.234.122.131:8220/Controller/'

constructor(private http:HttpClient) { }
  // login
  login(Email: string, Password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json, text/plain, */*',
    });
    const params  = new HttpParams()
    .set('Email', Email)
    .set('Password', Password);

    return this.http.get(this.api + 'login', {params, headers});
  }
  // Login

}
