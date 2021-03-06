import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/county-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent{

  @Input() paises: Country[] = [];

  constructor() { }

}
