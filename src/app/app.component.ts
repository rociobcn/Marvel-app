import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: { 'class' : 'card'}
})
export class AppComponent {
  title = 'Marvel-app';
}
