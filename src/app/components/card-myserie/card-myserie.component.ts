import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Serie } from 'src/app/models/serie';

@Component({
  selector: 'app-card-myserie',
  templateUrl: './card-myserie.component.html',
  styleUrls: ['./card-myserie.component.css']
})
export class CardMyserieComponent implements OnInit {
  @Input() 
  serie: Serie;
  @Input()
  index: number;
  @Output()
  eliminarSerieEvento = new EventEmitter<number>();
  constructor() {
    this.index = 0;
    this.serie = new Serie(0, "", "",0, "", "");
  }

  ngOnInit(): void {
  }

  eliminarSerie(){
    this.eliminarSerieEvento.emit(this.index);
  }

}
