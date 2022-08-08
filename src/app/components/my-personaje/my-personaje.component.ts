import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';
import { PersonajesApiService } from 'src/app/services/personajes-api.service';

@Component({
  selector: 'app-my-personaje',
  templateUrl: './my-personaje.component.html',
  styleUrls: ['./my-personaje.component.css']
})
export class MyPersonajeComponent implements OnInit {
  allCharacters:Personaje[] = [];
  constructor(private personajeApiService : PersonajesApiService) {
  
  }

  ngOnInit(): void {
    this.allCharacters = [];
    this.personajeApiService.getAllPersonajes().subscribe(
      response =>{
        response.forEach((user: { id: number; name: string; description: string; thumbnailPath: string, thumbnailExtension: string }) => {
        const id: number = user.id;
        const name: string= user.name;
        const description: string = user.description;
        const thumbnailPath: string = user.thumbnailPath;
        const thumbnailExtension: string = user.thumbnailExtension;
  
        const personaje: Personaje = new Personaje(id, name, description, thumbnailPath, thumbnailExtension);
       this.allCharacters.push(personaje);
      });
    });
    }
   

  eliminarPersonaje(index: number){
    let personaje = this.allCharacters.splice(index, 1)[0];
    this.personajeApiService.deletePersonaje(personaje.id).subscribe(
      response =>{
        alert("Personaje eliminado de su base de datos");
      }
    );
  }
  topfive(){  
   /* this.allCharacters.sort(function(a, b){
      return b.id - a.id;
    }).slice(0, 5);
*/
    this.personajeApiService.getTopFive().subscribe(
      response =>{
        this.allCharacters = response;
      }
    );
  }

}
