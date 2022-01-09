import { Component } from '@angular/core';

import Personajes from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(){}

  personaje: Personajes ={
    nombre: 'Pepe',
    power: 1234,
  };
  
  // cambiarNombre( event: any){
  //   console.log(event.target.value);
  // }
}
