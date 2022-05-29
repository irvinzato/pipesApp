import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cultura'
})
export class CulturaPipe implements PipeTransform {

  transform(value: number ): string {
    switch( value ) {
      case value = 0:
        return 'Maya';
      case value = 1:
        return 'China';
      case value = 2:
        return 'Griega';
      case value = 3:
        return 'Nordica'
      default:
        return 'Cultura no registrada';
    }
  }

}
