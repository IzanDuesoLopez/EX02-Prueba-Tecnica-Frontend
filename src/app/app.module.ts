import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { ListaSeriesTvComponent } from './components/lista-series-tv/lista-series-tv.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaDetailsComponent } from './components/pelicula-details/pelicula-details.component';
import { SerieDetailsComponent } from './components/serie-details/serie-details.component';
//import {authInterceptorProviders} from './_hel'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListaPeliculasComponent,
    ListaSeriesTvComponent,
    NavbarComponent,
    BuscarComponent,
    PeliculaDetailsComponent,
    SerieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
