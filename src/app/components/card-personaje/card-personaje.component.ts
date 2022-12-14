import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css'],

})
export class CardPersonajeComponent implements OnInit {
  @Input() 
  personaje: any;
  @Input()
  index: number;
  @Output()
  a├▒adirPersonajeEvento = new EventEmitter<number>();
  constructor() { 
    this.index = 0;
  
  }

  ngOnInit(): void {
  }

  guardarPersonaje(){
    this.a├▒adirPersonajeEvento.emit(this.index);
  }

}
