import { Component, OnInit } from '@angular/core';

export interface Tile {
  image: string;
  name: string;
}

@Component({
  selector: 'app-honda-cars',
  templateUrl: './honda-cars.component.html',
  styleUrls: ['./honda-cars.component.css']
})
export class HondaCarsComponent {

  constructor() { }

  carsImg: Tile[] = [
    {name: 'Honda Amaze', image: 'assets/images/cars/honda/amaze_honda.jpeg' },
    {name: 'Honda City', image: 'assets/images/cars/honda/city_honda.jpeg' },
    {name: 'Honda Civic', image: 'assets/images/cars/honda/civic_honda.jpeg' },
    {name: 'Honda Jazz', image: 'assets/images/cars/honda/jazz_honda.jpeg' },
    {name: 'Honda WR', image: 'assets/images/cars/honda/wr_honda.jpeg' },
  ];

}
