import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/county-interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {

  @Input() paises: Country[] = [];

  constructor() { }

}
