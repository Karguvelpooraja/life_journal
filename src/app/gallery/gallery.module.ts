import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleryHomeComponent } from './gallery-home/gallery-home.component';
import { KidsCarouselComponent } from './kids-carousel/kids-carousel.component';


@NgModule({
  declarations: [
    GalleryComponent,
    GalleryHomeComponent,
    KidsCarouselComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  exports:[GalleryHomeComponent,GalleryComponent]
})
export class GalleryModule { }
