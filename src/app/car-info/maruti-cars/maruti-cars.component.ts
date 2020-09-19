import { Component, OnInit } from '@angular/core';

export interface Tile {
  image: string;
  name: string;
}

@Component({
  selector: 'app-maruti-cars',
  templateUrl: './maruti-cars.component.html',
  styleUrls: ['./maruti-cars.component.css']
})
export class MarutiCarsComponent {

  constructor() { }

  carsImg: Tile[] = [
    {name: 'Maruti Suzuki Alto', image: 'assets/images/cars/maruti_suzuki/alto_maruti.jpeg' },
    {name: 'Maruti Suzuki Baleno', image: 'assets/images/cars/maruti_suzuki/baleno_maruti.jpeg' },
    {name: 'Maruti Suzuki Brezza', image: 'assets/images/cars/maruti_suzuki/brezza_maruti.jpeg' },
    {name: 'Maruti Suzuki Ertiga', image: 'assets/images/cars/maruti_suzuki/ertiga_maruti.jpeg' },
    {name: 'Maruti Suzuki Swift', image: 'assets/images/cars/maruti_suzuki/swift_maruti.jpeg' },
  ];

}
