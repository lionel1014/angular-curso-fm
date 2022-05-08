import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino!:string;
  isHttpOk: boolean = true

  constructor( private paisService: PaisService ) { }

  buscar(){
    
    this.isHttpOk = true
    this.paisService.buscarPais(this.termino).subscribe( (response) =>{
      console.log(response);

    }, (err) =>{
      console.info(err);
      this.isHttpOk = false;
    });
  }

}
