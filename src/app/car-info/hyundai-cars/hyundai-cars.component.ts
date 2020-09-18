import { Component, OnInit } from '@angular/core';

export interface Tile {
  image: string;
  name: string;
}


@Component({
  selector: 'app-hyundai-cars',
  templateUrl: './hyundai-cars.component.html',
  styleUrls: ['./hyundai-cars.component.css']
})
export class HyundaiCarsComponent {

  constructor() { }

  carsImg: Tile[] = [
    {name: 'Hyundai Aura', image: 'assets/images/cars/hyundai/aura_hyundai.jpeg' },
    {name: 'Hyundai Creta', image: 'assets/images/cars/hyundai/creta_hyundai.jpeg' },
    {name: 'Hyundai Elite', image: 'assets/images/cars/hyundai/elite_hyundai.jpeg' },
    {name: 'Hyundai Grand', image: 'assets/images/cars/hyundai/grand_hyundai.jpeg' },
    {name: 'Hyundai Venue', image: 'assets/images/cars/hyundai/venue_hyundai.jpeg' },
  ];

}
