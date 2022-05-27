import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  //La clave para saber cuando exportar algo es cuando se usara fuera de este modulo
  //Cuando se encuentra fuera de la carpeta el lugar donde quiero usarlo
  exports: [  
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
