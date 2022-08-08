import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from '../models/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesApiService {
  private readonly baseUrl = 'http://localhost:8081/api/series/';
  constructor(private http: HttpClient) { }

  addSerie(serie: Serie)  {
    const data= {
      id: serie.id,
      title: serie.title,
      description: serie.description,
      startYearPublication: serie.startYearPublication,
      thumbnailPath: serie.thumbnailPath,
      thumbnailExtension: serie.thumbnailExtension
    }; 

  return this.http.post(this.baseUrl + "add", data);
  }
  getAllSeries(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "all");
  }
  deleteSerie(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
  deleteSeriesVacias() {
    return this.http.delete(this.baseUrl + "deleteVacias");
  }
}
