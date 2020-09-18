import { Component, OnInit } from '@angular/core';

export interface Tile {
  logo: string;
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  cars: Tile[] = [
    {text: 'Honda', logo: 'assets/images/logo/honda_logo.png', route: '/honda' },
    {text: 'Maruti Suzuki', logo: 'assets/images/logo/maruri_suzuki_logo.png', route: '/maruti' },
    {text: 'Hyundai', logo: 'assets/images/logo/hyundai_logo.png', route: '/hyundai' },
    {text: 'Mahindra', logo: 'assets/images/logo/mahindra_logo.png', route: '/mahindra' },
    {text: 'Renault', logo: 'assets/images/logo/renault_logo.png', route: '/renault' },
    {text: 'Tata', logo: 'assets/images/logo/tata_logo.png', route: '/tata' },
    // {text: 'Toyota', logo: 'assets/images/logo/toyota_logo.png' },
  ];

}
