import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Irving';
  genero: string = 'masculino';

  invitacionObj = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Juan', 'Norma', 'Ruiz'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.' ,
    'other': 'tenemos # clientes esperando.'
  }

  cambiarNombre() {
    if( this.genero == 'masculino' ) {
      this.nombre = 'Jade';
      this.genero = 'femenino'
    } else {
      this.nombre = 'Irving';
      this.genero = 'masculino'
    }
 
  }

  borrarCliente() {
    this.clientes.pop();
  }

  agregarCliente() {
    this.clientes.push('ClienteX');
  }

}
