import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'irving';
  nombreUpper: string = 'IRVING';
  nombreCompleto: string = 'Irving MaUriCiO rivera';

  fecha: Date = new Date();    //dia de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
