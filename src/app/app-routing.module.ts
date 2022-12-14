import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HomeComponent } from './components/home/home.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { ListaSeriesTvComponent } from './components/lista-series-tv/lista-series-tv.component';
import { LoginComponent } from './components/login/login.component';
import { PeliculaDetailsComponent } from './components/pelicula-details/pelicula-details.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'lista-peliculas', component: ListaPeliculasComponent},
  {path: 'lista-series-tv', component: ListaSeriesTvComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'pelicula/:id', component:PeliculaDetailsComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
