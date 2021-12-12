import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  campeones: string[] = ['Pangolier','Storm','Bounty Hunter','Rikki','Cristal Maid'];

  campeonBorrado: string | undefined = '';


  borrarCampeon(){
    console.log("Borrando... ❗❗❗")
    this.campeonBorrado= this.campeones.pop()
    //? this.campeonBorrado= this.campeones.pop() || ''; si esto es undyfined entonces retorna ''
    console.log(this.campeones);
  }

}
