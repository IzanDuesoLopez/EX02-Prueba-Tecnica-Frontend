import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula.model';
import { Serie } from '../models/serie.model';

const baseUrl = 'https://api.themoviedb.org/3/list/1?api_key=d83c49c05d93ba53f81f1fc9250db34e&language=en-US';
const serieUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=d83c49c05d93ba53f81f1fc9250db34e&language=en-US&page=1';

const parteUno = 'https://api.themoviedb.org/3/movie/';
const parteDos = '?api_key=d83c49c05d93ba53f81f1fc9250db34e&language=en-US';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pelicula> {
    return this.http.get(baseUrl, {responseType: 'json'});
  }

  getPeliculaId(id:any): Observable<Pelicula['items']> {
    return this.http.get(parteUno + id + parteDos, {responseType: 'json'});
  }

  getAllSeries(): Observable<Serie> {
    return this.http.get(serieUrl, {responseType: 'json'});
  }
}
