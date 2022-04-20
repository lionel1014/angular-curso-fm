import { Component, EventEmitter, Input, Output} from '@angular/core';
import Personajes from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  // styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input() personaje: Personajes = {
    nombre: '',
    power: 0,
  }
  
  // @Output() onNuevoPersonaje: EventEmitter<Personajes> = new EventEmitter<Personajes>();

  constructor( private dbzService: DbzService ){}

  agregar(){
    if (this.personaje.nombre.trim().length === 0) {
      return;
    }
    // this.onNuevoPersonaje.emit(this.personaje)

    this.dbzService.agregarPersonaje(this.personaje)

    console.log(this.personaje);
    this.personaje = {
      nombre: '',
      power: 0,
    };

    // console.log(this.personajes);
  };

  borrar(){
    this.dbzService.borrarPersonaje()
  }

}
