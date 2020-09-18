import { Component, OnInit } from '@angular/core';

export interface Tile {
  image: string;
  name: string;
}

@Component({
  selector: 'app-tata-cars',
  templateUrl: './tata-cars.component.html',
  styleUrls: ['./tata-cars.component.css']
})
export class TataCarsComponent {

  constructor() { }

  carsImg: Tile[] = [
    {name: 'Tata Altroz', image: 'assets/images/cars/tata/altroz_tata.jpeg' },
    {name: 'Tata Buzzard', image: 'assets/images/cars/tata/buzzard_tata.jpeg' },
    {name: 'Tata Harrier', image: 'assets/images/cars/tata/harrier_tata.jpeg' },
    {name: 'Tata Nexon', image: 'assets/images/cars/tata/nexon_tata.jpeg' },
    {name: 'Tata Tiago', image: 'assets/images/cars/tata/tiago_tata.jpeg' },
  ];

}
