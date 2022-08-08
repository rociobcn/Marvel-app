import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesApiService } from 'src/app/services/series-api.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  allSeries:any=[];
  constructor(private serieApiService : SeriesApiService, private serieService: SeriesService) { }

  ngOnInit(): void {
    this.serieService.getAllSeries().subscribe(result => {
      console.log(result);
      this.allSeries = result.data.results;
    }
    );
  }
  guardarSerie(index: number){
    console.log(this.allSeries[index].title);
    const id = this.allSeries[index].id;
    const title : string = this.allSeries[index].title;
    const description = this.allSeries[index].description;
    const startYearPublication = this.allSeries[index].startYear;
    const thumbnailPath = this.allSeries[index].thumbnail.path;
    const thumbnailExtension = this.allSeries[index].thumbnail.extension;
    const serie: Serie = new Serie(id, title, description,startYearPublication, thumbnailPath, thumbnailExtension);
    console.log(serie);
    this.serieApiService.addSerie(serie).subscribe((result) => {
      console.log(serie.title + " guardado en su base de datos");
      alert("Serie guardada en su base de datos");},
      (err) => {
        console.log(err);
      alert("Esta serie ya existe en su base de datos");
      });
    }
  }

