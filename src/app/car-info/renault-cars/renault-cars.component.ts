import { Component, OnInit } from '@angular/core';

export interface Tile {
  image: string;
  name: string;
}

@Component({
  selector: 'app-renault-cars',
  templateUrl: './renault-cars.component.html',
  styleUrls: ['./renault-cars.component.css']
})
export class RenaultCarsComponent {

  constructor() { }

  carsImg: Tile[] = [
    {name: 'Renault City', image: 'assets/images/cars/renault/city_renault.jpeg' },
    {name: 'Renault Duster', image: 'assets/images/cars/renault/duster_renault.jpeg' },
    {name: 'Renault Kiger', image: 'assets/images/cars/renault/kiger_renault.jpeg' },
    {name: 'Renault Kwid', image: 'assets/images/cars/renault/kwid_renault.jpeg' },
    {name: 'Renault Triber', image: 'assets/images/cars/renault/triber_renault.jpeg' },
  ];

}
