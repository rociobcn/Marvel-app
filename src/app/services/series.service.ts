import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private readonly baseUrl = 'https://gateway.marvel.com:443/v1/public/series?limit=50&ts=1&apikey=30882d401a2d3910b49f98c4f72607ff&hash=4f7eddbef3ff8a3e01def8a2b2365c79';
  
  constructor(private http: HttpClient) { }

  getAllSeries(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
