import { Component } from '@angular/core';
import Personajes from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  // styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  // @Input('data') personajes : Personajes[] = [] //estos datos vendran desde el componente padre
  
  constructor(private dbzService: DbzService){};

  public get personajes() : Personajes[] {
    return this.dbzService.personajes;
  };
  
}
