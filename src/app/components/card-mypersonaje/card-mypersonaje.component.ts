import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-card-mypersonaje',
  templateUrl: './card-mypersonaje.component.html',
  styleUrls: ['./card-mypersonaje.component.css']
})
export class CardMypersonajeComponent implements OnInit {
  @Input() 
  personaje: Personaje;
  @Input()
  index: number;
  @Output()
  eliminarPersonajeEvento = new EventEmitter<number>();
  constructor() {
    this.index = 0;
    this.personaje = new Personaje(0, "", "", "", "");
   }

  ngOnInit(): void {
  }
  eliminarPersonaje(){
    this.eliminarPersonajeEvento.emit(this.index);
  }


}
