import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-series',
  templateUrl: './card-series.component.html',
  styleUrls: ['./card-series.component.css']
})
export class CardSeriesComponent implements OnInit {
  @Input() 
  serie: any;
  @Input()
  index: number;
  @Output()
  añadirSerieEvento = new EventEmitter<number>();
  
  constructor() {
    this.index = 0;
   }

  ngOnInit(): void {
  }

  guardarSerie(){
    this.añadirSerieEvento.emit(this.index);
  }

}
