import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';
import { PeliculasService } from 'src/app/_services/peliculas.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  peliculas?: Pelicula;
  currentPelicula: Pelicula = {};
  currentIndex = -1;
  title = '';
  peliculas_datos: any;

  id_posicion:any;

  constructor(private peliculaService: PeliculasService) { }

  ngOnInit(): void {
    this.retrievePeliculas();
  }

  retrievePeliculas(): void {
    this.peliculaService.getAll().subscribe(
      data => {
        this.peliculas = data;
        console.log(data);
        this.peliculas_datos = data.items;
        console.log(this.peliculas_datos);
      },
      error => {
        console.log(error);
      }
    )
  }

  refreshList(): void {
    this.retrievePeliculas();
  }

  setActivePelicula(pelicula: Pelicula, index: number): void {
    this.currentPelicula = pelicula;
    this.currentIndex = index;
  }

  idPosicion(){
    this.id_posicion = this.peliculas_datos.id;
  }

}
