import { R3SelectorScopeMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesApiService } from 'src/app/services/series-api.service';

@Component({
  selector: 'app-my-series',
  templateUrl: './my-series.component.html',
  styleUrls: ['./my-series.component.css']
})
export class MySeriesComponent implements OnInit {
  allSeries:Serie[] = [];
  constructor(private seriesApiService: SeriesApiService) { }

  ngOnInit(): void {
    this.allSeries = [];
   this.rellenarLista();
  }
  rellenarLista(){
    this.seriesApiService.getAllSeries().subscribe(
      response =>{
        response.forEach((user: { id: number; title: string; description: string; startYearPublication: number, thumbnailPath: string, thumbnailExtension: string }) => {
        const id: number = user.id;
        const title: string= user.title;
        const description: string = user.description;
        const startYearPublication: number = user.startYearPublication;
        const thumbnailPath: string = user.thumbnailPath;
        const thumbnailExtension: string = user.thumbnailExtension;
  
        const serie: Serie = new Serie(id, title, description, startYearPublication, thumbnailPath, thumbnailExtension);
       this.allSeries.push(serie);
      });
    });
  }

  eliminarSerie(index: number){

    let serie = this.allSeries[index];
    this.seriesApiService.deleteSerie(serie.id).subscribe(
      response =>{
        alert("Serie eliminada de su base de datos");
        this.allSeries.splice(index, 1)[0];
      },
      error =>{
        alert("Error al eliminar serie, primero elimine los personajes que aparecen en esta serie");
      }
    );
  }
  eliminarSeriesVacias(){

    this.seriesApiService.deleteSeriesVacias().subscribe(
      response =>{
        alert("Series vacias eliminadas de su base de datos");
        this.allSeries = [];
        this.rellenarLista();

      },
      error =>{
        alert("Error al eliminar series vacias");
      }
    );
    
  }

}
