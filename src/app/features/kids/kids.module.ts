import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';
import { KidsComponent } from './kids.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    KidsComponent
  ],
  imports: [
    CommonModule,
    // KidsRoutingModule,
    RouterModule.forChild([
      { path: '', component: KidsComponent }
    ])
  ]
})
export class KidsModule { }
