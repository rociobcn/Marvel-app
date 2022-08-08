import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  @Input() 
  serie: Serie;
  constructor() {
    this.serie = new Serie(0, "","",0,"","");
   }

  ngOnInit(): void {
  }

}
