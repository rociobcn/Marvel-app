import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaComponent } from './components/lista/lista.component';
import { MyPersonajeComponent } from './components/my-personaje/my-personaje.component';
import { MySeriesComponent } from './components/my-series/my-series.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  {path: 'personajes', component: PersonajesComponent},
  {path: 'series', component: SeriesComponent},
  {path: '', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'mypersonajes', component: MyPersonajeComponent},
  {path: 'myseries', component: MySeriesComponent},
  {path: 'lista/:id', component: ListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
