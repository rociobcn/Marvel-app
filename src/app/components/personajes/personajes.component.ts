import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from 'src/app/models/personaje';
import { Serie } from 'src/app/models/serie';
import { PersonajeServiceService } from 'src/app/services/personaje-service.service';
import { PersonajesApiService } from 'src/app/services/personajes-api.service';
import { SerieIdService } from 'src/app/services/serie-id.service';
import { SeriesApiService } from 'src/app/services/series-api.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  allCharacters:any=[];
  constructor(private personajeService: PersonajeServiceService, private personajeApiService : PersonajesApiService, private serieIdService: SerieIdService, private serieApiService: SeriesApiService) { }
 
  ngOnInit(): void {
    this.personajeService.getAllPersonajes().subscribe(result => {
      console.log(result);
      this.allCharacters = result.data.results;
    }
    );
  }
  guardarPersonaje(index: number){
  console.log("Personaje: el indice-----" + this.allCharacters[index]);
  const idPersonaje = this.allCharacters[index].id;
  const name = this.allCharacters[index].name;
  const description = this.allCharacters[index].description;
  const thumbnailPath = this.allCharacters[index].thumbnail.path;
  const thumbnailExtension = this.allCharacters[index].thumbnail.extension;
  const seriesList = this.allCharacters[index].series.items;
  console.log("Personaje: su serielist----" + seriesList);
  const personaje: Personaje = new Personaje(idPersonaje, name, description, thumbnailPath, thumbnailExtension);
  this.personajeApiService.addPersonaje(personaje).subscribe((result) => {
  alert("Personaje guardado en su base de datos");},
  (err) => {
  alert("Este personaje ya existe en su base de datos");
  });
  seriesList.forEach((element: { resourceURI: string}) => {
    const item = element.resourceURI;
    console.log("Estoy metida en la lista, por cada elemento su url---", element.resourceURI);
    this.serieIdService.getSerieURL(item).subscribe(result => {
      console.log("Una vez metida en la lista, este es la serie---", result);
      const id = result.data.results[0].id;
      const title = result.data.results[0].title;
      const description = result.data.results[0].description;
      const startYearPublication = result.data.results[0].startYear;
      const thumbnailPath = result.data.results[0].thumbnail.path;
      const thumbnailExtension = result.data.results[0].thumbnail.extension;
      const serie: Serie = new Serie(id, title, description, startYearPublication, thumbnailPath, thumbnailExtension);
      console.log("la serie compuesta---", serie);
      this.serieApiService.addSerie(serie).subscribe((result) => {
        console.log(serie.title + serie.startYearPublication," guardada en la bbdd");
        this.personajeApiService.addSerieId(idPersonaje, serie).subscribe((result) => { 
          console.log(serie.title + serie.startYearPublication, "guardada en la lista del personaje");
        
          ;}
          ,(err) => {
            console.log(err + "Error al guardar serieList");
        
          }
          );
        ;},
        (err) => {
          console.log(err);
        
        })

      });
      
    
    });

}

}

