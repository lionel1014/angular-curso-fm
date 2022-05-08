import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styleUrls: ['./input-country.component.css']
})
export class InputCountryComponent{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino!:string;

  buscar(){
    this.onEnter.emit( this.termino);
  }

}
