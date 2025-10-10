import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';


@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleListComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ],
  exports:[ScheduleListComponent,ScheduleComponent]
})
export class ScheduleModule { }
