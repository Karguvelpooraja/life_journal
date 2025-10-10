import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupleStoryRoutingModule } from './couple-story-routing.module';
import { CoupleStoryComponent } from './couple-story.component';


@NgModule({
  declarations: [
    CoupleStoryComponent
  ],
  imports: [
    CommonModule,
    CoupleStoryRoutingModule
  ]
})
export class CoupleStoryModule { }
