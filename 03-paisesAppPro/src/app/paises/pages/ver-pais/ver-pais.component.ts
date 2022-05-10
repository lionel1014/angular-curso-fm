import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/county-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( param => this.paisService.buscarPaisAlpha( param['id'] ))
      )
      .subscribe( response =>{
        console.log(response);
      })

    // this.activatedRoute.params.
    //   subscribe( params =>{
    //     let {id} = params
    //     this.paisService.buscarPaisAlpha( id )
    //       .subscribe( pais =>{
    //         console.log(pais);
    //       })
    //   })



  }

}
