import { Pipe, PipeTransform } from '@angular/core';
import { Dios } from './../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( value: Dios[], ordenarPor: string = 'sin valor' ): Dios[] {

    if( ordenarPor == 'nombre' ) {
      value = value.sort( (a,b) =>  ( a.nombre > b.nombre ) ? 1 : -1 );
      return value;
    } 
    if( ordenarPor == 'ofensivo' ) {  //Con los booleanos el false se ordena primero, despues el true
      value = value.sort( (a,b) => ( a.ofensivo > b.ofensivo) ? -1 : 1 );
      return value;
    }
    if( ordenarPor == 'cultura' ) {
      value = value.sort( (a,b) => ( a.cultura > b.cultura ) ? 1 : -1 );
      return value;
    } else {
      return value;
    }
  }

}
