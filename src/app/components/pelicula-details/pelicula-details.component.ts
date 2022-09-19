import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula.model';
import { PeliculasService } from 'src/app/_services/peliculas.service';

@Component({
  selector: 'app-pelicula-details',
  templateUrl: './pelicula-details.component.html',
  styleUrls: ['./pelicula-details.component.css']
})
export class PeliculaDetailsComponent implements OnInit {
  peliculas?: Pelicula;
  currentPelicula: Pelicula = {};
  currentIndex = -1;
  title = '';
  peliculas_datos: any;

  id:any;
  articulos:any = null;

  resultado_final:any;

  constructor(private peliculaService: PeliculasService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.peliculaService.getAll()
      .subscribe(result => this.articulos = result.items);

      this.route.params.subscribe((params:Params) => {
        this.id = params['id'];

      });

      this.peliculaService.getPeliculaId(this.id).subscribe(
        data => {
          console.log("ID: " + this.id)
          this.peliculas = data;
          console.log(data);
          this.peliculas_datos = data;
          console.log(this.peliculas_datos);
          this.resultado_final = this.peliculas_datos;
        },
        error => {
          console.log(error);
        }
      )

  }


}
