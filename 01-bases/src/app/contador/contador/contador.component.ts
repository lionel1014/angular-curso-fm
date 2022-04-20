import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola Mundo!!!!</h1>
    <h3>Soy el {{ title }}</h3>
    <p>
      <small>
        La base es: <strong>{{ base }}</strong>
      </small>
    </p>

    <button (click)="action(-base)">{{ base }}</button>

    <span> {{ numero }} </span>

    <button (click)="action(base)">{{ base }}</button>
  `,
})
export class ContadorComponent {
  title: string = 'Contador APP :D'; //nombre del proyecto
  numero: number = 10;

  base: number = 5;

  action(valor: number) {
    this.numero += valor;
  }
}
