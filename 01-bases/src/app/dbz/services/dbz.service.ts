import { Injectable } from "@angular/core";
import Personajes from '../interfaces/dbz.interface';


@Injectable()

export class DbzService {

    private _personajes: Personajes[] = [
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
    ];

    
    public get personajes() : Personajes[] {
        return [...this._personajes]
    }

    constructor() {
        console.log("Servicio DbzService inicializado");
    };

    agregarPersonaje(params: Personajes){
        this._personajes.push(params)
    }
    borrarPersonaje(){
        this._personajes.pop() || null
    }
};