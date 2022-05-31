import { Component, OnInit } from '@angular/core';

import { Dios, Cultura } from './../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  ordenarCon: string = '';
  dioses: Dios[] = [
    {
      nombre: 'Chaac',
      ofensivo: true,
      cultura: Cultura.maya
    },
    {
      nombre: 'Change',
      ofensivo: true,
      cultura: Cultura.china
    },
    {
      nombre: 'Odin',
      ofensivo: false,
      cultura: Cultura.nordica
    },
    {
      nombre: 'Tsukoyomi',
      ofensivo: true,
      cultura: Cultura.china
    },
    {
      nombre: 'Athenea',
      ofensivo: false,
      cultura: Cultura.griega
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiar() {
    ( this.enMayusculas ) ? this.enMayusculas = false : this.enMayusculas = true;
  }

  cambiarValor( valor: string ) {
    this.ordenarCon = valor;
  }

}
