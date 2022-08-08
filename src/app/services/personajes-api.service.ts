import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../models/personaje';
import { Serie } from '../models/serie';

@Injectable({
  providedIn: 'root'
})
export class PersonajesApiService {
  private readonly baseUrl = 'http://localhost:8081/api/personaje/';

  constructor(private http: HttpClient) { }

  addPersonaje(personaje: Personaje)  {
    const data= {
      id: personaje.id,
      name: personaje.name,
      description: personaje.description,
      thumbnailPath: personaje.thumbnailPath,
      thumbnailExtension: personaje.thumbnailExtension
    }; 

  return this.http.post(this.baseUrl + "add/", data);
  }
  getPersonajeById(id: number) {
    return this.http.get(this.baseUrl + id);
  }
  getAllPersonajes(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "all");
  }
  deletePersonaje(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
  addSerieId(id: number, serie: Serie) {
    const data= {
      id: serie.id,
      title: serie.title,
      description: serie.description,
      thumbnailPath: serie.thumbnailPath,
      thumbnailExtension: serie.thumbnailExtension
    };
    return this.http.post(this.baseUrl + "addSerie/" +  id, data);
  }
  getAllSeries(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + "allSeries/" + id);
  }
  getTopFive(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "theBest5");
  }
}
