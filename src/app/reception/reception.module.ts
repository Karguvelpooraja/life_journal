import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionComponent } from './reception.component';
import { ReceptionPageComponent } from './reception-page/reception-page.component';


@NgModule({
  declarations: [
    ReceptionComponent,
    ReceptionPageComponent
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule
  ],
  exports:[ReceptionComponent]
})
export class ReceptionModule { }
