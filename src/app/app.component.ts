import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'jade naomi'
  title: string = 'pipesApp';
  valor: number = 1000;
  obj = {
    nombre: 'Irving',
    apellido: 'Rivera'
  }
}
