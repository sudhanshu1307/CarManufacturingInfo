import { Component, OnInit } from '@angular/core';

export interface Tile {
  image: string;
  name: string;
}

@Component({
  selector: 'app-mahindra-cars',
  templateUrl: './mahindra-cars.component.html',
  styleUrls: ['./mahindra-cars.component.css']
})
export class MahindraCarsComponent {

  constructor() { }

  carsImg: Tile[] = [
    {name: 'Mahindra Bolero', image: 'assets/images/cars/mahindra/bolero_mahindra.jpeg' },
    {name: 'Mahindra KUV 100', image: 'assets/images/cars/mahindra/kuv100_mahindra.jpeg' },
    {name: 'Mahindra Scorpio', image: 'assets/images/cars/mahindra/scorpio_mahindra.jpeg' },
    {name: 'Mahindra Thar', image: 'assets/images/cars/mahindra/thar_mahindra.jpeg' },
    {name: 'Mahindra XUV 300', image: 'assets/images/cars/mahindra/xuv300_mahindra.jpeg' },
  ];

}
