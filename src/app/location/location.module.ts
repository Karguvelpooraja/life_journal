import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationPageComponent } from './location-page/location-page.component';


@NgModule({
  declarations: [
    LocationComponent,
    LocationPageComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ],
  exports:[LocationComponent,LocationPageComponent]
})
export class LocationModule { }
