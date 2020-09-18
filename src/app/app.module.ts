import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { TataCarsComponent } from './car-info/tata-cars/tata-cars.component';
import { ToyotaCarsComponent } from './car-info/toyota-cars/toyota-cars.component';
import { HyundaiCarsComponent } from './car-info/hyundai-cars/hyundai-cars.component';
import { HondaCarsComponent } from './car-info/honda-cars/honda-cars.component';
import { RenaultCarsComponent } from './car-info/renault-cars/renault-cars.component';
import { MarutiCarsComponent } from './car-info/maruti-cars/maruti-cars.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterInfoComponent,
    TataCarsComponent,
    ToyotaCarsComponent,
    HyundaiCarsComponent,
    HondaCarsComponent,
    RenaultCarsComponent,
    MarutiCarsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
