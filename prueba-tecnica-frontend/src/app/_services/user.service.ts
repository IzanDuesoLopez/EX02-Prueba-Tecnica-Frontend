import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'https://api.themoviedb.org/3/authentication/token/new?api_key=d83c49c05d93ba53f81f1fc9250db34e';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

}
