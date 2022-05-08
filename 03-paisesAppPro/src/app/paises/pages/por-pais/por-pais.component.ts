import { Component } from '@angular/core';
import { Country } from '../../interfaces/county-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino!:string;
  isHttpOk: boolean = true
  paises: Array<Country> = [];

  constructor( private paisService: PaisService ) { }

  buscar(){
    
    if (this.termino.length < 2) {
      return
    }

    this.isHttpOk = true
    this.paisService.buscarPais(this.termino).subscribe( (response) =>{
      console.log(response);
      this.paises = response;

    }, (err) =>{
      console.info(err);
      this.isHttpOk = false;
      this.paises
    });
  }

}
