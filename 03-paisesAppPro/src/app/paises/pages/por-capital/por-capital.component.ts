import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/county-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino!:string;
  isHttpOk: boolean = true
  @Input() paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( event: string ){
    
    if (event.length < 2) {
      return
    }

    this.termino = event

    this.isHttpOk = true
    this.paisService.buscarCapital(this.termino).subscribe( (response) =>{
      console.log(response);
      this.paises = response;

    }, (err) =>{
      console.info(err);
      this.isHttpOk = false;
      this.paises
    });
  }

  suggestion( termino: string){
    this.isHttpOk = true;
  }

}
