import { Component, OnInit } from '@angular/core';

interface Personajes{
  nombre: string;
  power : number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personajes[] = [
    {
      nombre: 'Android 18',
      power: 15000,
    },
    {
      nombre: 'Milk',
      power: 3000,
    },
    {
      nombre: 'Bulma',
      power: 1500,
    },
    {
      nombre: 'Wiz',
      power: 85000,
    },
  ]

  personaje: Personajes ={
    nombre: '',
    power: 0,
  }

  // cambiarNombre( event: any){
  //   console.log(event.target.value);
  // }

  agregar(){
    // console.log("test");
    // console.log(event);
    if (this.personaje.nombre.trim().length === 0) {
      return
    }
    this.personajes.push(this.personaje);
    console.log(this.personaje);
    this.personaje = {
      nombre: '',
      power: 0,
    }

  }

  borrarPersonaje(){
    console.log(this.personajes.pop() || '');
  }
}
