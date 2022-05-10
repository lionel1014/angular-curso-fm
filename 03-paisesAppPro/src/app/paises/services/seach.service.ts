import { Injectable } from '@angular/core';
import { Country } from '../interfaces/county-interface';
import { PaisService } from './pais.service';

@Injectable({
  providedIn: 'root'
})
export class SeachService {

  constructor( private paisService: PaisService ) { }

}
