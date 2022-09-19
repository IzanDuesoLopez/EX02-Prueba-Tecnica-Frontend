import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';
import { PeliculasService } from 'src/app/_services/peliculas.service';

@Component({
  selector: 'app-lista-series-tv',
  templateUrl: './lista-series-tv.component.html',
  styleUrls: ['./lista-series-tv.component.css']
})
export class ListaSeriesTvComponent implements OnInit {

  series?: Serie;
  currentSerie: Serie = {};
  currentIndex = -1;
  title = '';
  series_datos: any;

  constructor(private serieService: PeliculasService) { }

  ngOnInit(): void {
    this.retrieveSeries();
  }

  retrieveSeries(): void {
    this.serieService.getAllSeries().subscribe(
      data => {
        this.series = data;
        console.log(data);
        this.series_datos = data.results;
        console.log(this.series_datos);
      },
      error => {
        console.log(error);
      }
    )
  }

  refreshList(): void {
    this.retrieveSeries();
  }

  setActiveSerie(pelicula: Serie, index: number): void {
    this.currentSerie = pelicula;
    this.currentIndex = index;
  }

}
