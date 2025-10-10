import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FamilyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FamilyComponent }])
  ]
})
export class FamilyModule { }
