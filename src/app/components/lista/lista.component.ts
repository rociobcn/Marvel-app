import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/models/serie';
import { PersonajesApiService } from 'src/app/services/personajes-api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  host: { 'class' : 'card'}
})
export class ListaComponent implements OnInit {
  id!: number;
  listSeries:Serie[] = [];
  constructor(private personajeApiService: PersonajesApiService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params["id"]
  }

  ngOnInit(): void {
    console
    this.listSeries = [];
    this.personajeApiService.getAllSeries(this.id).subscribe(
      response =>{
        response.forEach((user: { id: number; title: string; description: string; startYearPublication: number, thumbnailPath: string, thumbnailExtension: string }) => {
        const id: number = user.id;
        const title: string= user.title;
        const description: string = user.description;
        const startYearPublication: number = user.startYearPublication;
        const thumbnailPath: string = user.thumbnailPath;
        const thumbnailExtension: string = user.thumbnailExtension;

        const serie: Serie = new Serie(id, title, description, startYearPublication, thumbnailPath, thumbnailExtension);
       this.listSeries.push(serie);
       
      })
    });
  }

}
