import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ofensivo'
})

export class OfensivoPipe implements PipeTransform {

    transform( value: boolean ) {
        return ( value ) ? 'Es ofensivo' : 'No es ofensivo';
    }

}