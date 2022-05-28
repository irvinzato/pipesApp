import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  name: string = "irving";
  enMayusculas: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiar() {
    ( this.enMayusculas ) ? this.enMayusculas = false : this.enMayusculas = true;
    console.log("variable enMayusculas ", this.enMayusculas);
  }

}
