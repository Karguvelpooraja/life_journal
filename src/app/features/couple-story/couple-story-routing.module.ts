import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupleStoryComponent } from './couple-story.component';

const routes: Routes = [{ path: '', component: CoupleStoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoupleStoryRoutingModule { }
