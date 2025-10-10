import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';


@NgModule({
  declarations: [
    HomeComponent,
    CountdownComponent
  ],
  imports: [
    CommonModule,
    // HomeRoutingModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent } // default page for '/'
    ])
  ]
})
export class HomeModule { }
