import { Routes } from '@angular/router';
import { HondaCarsComponent } from './car-info/honda-cars/honda-cars.component';
import { HyundaiCarsComponent } from './car-info/hyundai-cars/hyundai-cars.component';
import { MahindraCarsComponent } from './car-info/mahindra-cars/mahindra-cars.component';
import { MarutiCarsComponent } from './car-info/maruti-cars/maruti-cars.component';
import { RenaultCarsComponent } from './car-info/renault-cars/renault-cars.component';
import { TataCarsComponent } from './car-info/tata-cars/tata-cars.component';

export const appRoutes: Routes = [
    { path: 'honda', component: HondaCarsComponent },
    { path: 'maruti', component: MarutiCarsComponent },
    { path: 'hyundai', component: HyundaiCarsComponent },
    { path: 'mahindra', component: MahindraCarsComponent },
    { path: 'renault', component: RenaultCarsComponent },
    { path: 'tata', component: TataCarsComponent },
]
