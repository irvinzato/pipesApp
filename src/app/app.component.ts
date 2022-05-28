import { Component, OnInit } from '@angular/core';
//Para el efecto que tienen los p-fieldset
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  nombre: string = 'jade naomi'
  title: string = 'pipesApp';
  valor: number = 1000;
  obj = {
    nombre: 'Irving',
    apellido: 'Rivera'
  }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
