import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SeriesComponent } from './components/series/series.component';
import { HomeComponent } from './components/home/home.component';
import { CardPersonajeComponent } from './components/card-personaje/card-personaje.component';
import { CardSeriesComponent } from './components/card-series/card-series.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MyPersonajeComponent } from './components/my-personaje/my-personaje.component';
import { MySeriesComponent } from './components/my-series/my-series.component';
import { CardMypersonajeComponent } from './components/card-mypersonaje/card-mypersonaje.component';
import { CardMyserieComponent } from './components/card-myserie/card-myserie.component';
import { ListaComponent } from './components/lista/lista.component';
import { ListCardComponent } from './components/list-card/list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonajesComponent,
    SeriesComponent,
    HomeComponent,
    CardPersonajeComponent,
    CardSeriesComponent,
    PerfilComponent,
    MyPersonajeComponent,
    MySeriesComponent,
    CardMypersonajeComponent,
    CardMyserieComponent,
    ListaComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
