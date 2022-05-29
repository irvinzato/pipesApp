import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

                    //El argumento podemos definirlo por defecto, por si no nos mandan ese parametro
    transform( valor: string, argumento: boolean = true ): string {
        console.log("Llego el valor ", valor);
        console.log("Llego el argumento ", argumento);
        return ( argumento ) ? valor.toUpperCase() : valor.toLowerCase();
    }

}