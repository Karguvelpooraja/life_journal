import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RsvpRoutingModule } from './rsvp-routing.module';
import { RsvpComponent } from './rsvp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RsvpComponent
  ],
  imports: [
    CommonModule,
    RsvpRoutingModule,
    FormsModule
  ]
})
export class RsvpModule { }
