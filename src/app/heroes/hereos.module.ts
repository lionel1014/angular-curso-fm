import { NgModule } from '@angular/core';

import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent,
    ],
    //*que cosa necesito que sea visible fuera de este modulo
    exports:[
        ListadoComponent,
    ],
    //! Van solo modulos unicamente
    imports:[
        CommonModule,
    ]
})

export class HeroesModule{}