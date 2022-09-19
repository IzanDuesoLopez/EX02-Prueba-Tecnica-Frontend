import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { UserService } from './user.service';
import { Token } from '../models/token.model';

const AUTH_API = 'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=d83c49c05d93ba53f81f1fc9250db34e';
const TOKEN_API = 'https://api.themoviedb.org/3/authentication/token/new?api_key=d83c49c05d93ba53f81f1fc9250db34e';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuthenticationToken(): Observable<Token["request_token"]> {
    return this.http.get(TOKEN_API, {responseType: 'json'});
  }

  login(username: string, password: string, request_token:string): Observable<any> {
    return this.http.post(AUTH_API, {
      username,
      password,
      request_token
    }, httpOptions)
  }

}
