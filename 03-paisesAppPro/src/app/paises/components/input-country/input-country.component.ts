import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styleUrls: ['./input-country.component.css']
})
export class InputCountryComponent implements OnInit{
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = "Buscar un país...";
  
  debouncer: Subject<string> = new Subject();
  
  termino!:string;
  
  ngOnInit(): void {
    this.debouncer
      .pipe( //tubería que nos permite transformar la salida
        debounceTime(300) //delay de tiempo antes de continuar
      )
      .subscribe(value =>{
        console.log(`debouncer: ${value}`)
        this.onDebounce.emit( this.termino )
      })
  }

  buscar(){
    this.onEnter.emit( this.termino);
  }

  keyPressed = () => {
    this.debouncer.next(this.termino)
  }

}
