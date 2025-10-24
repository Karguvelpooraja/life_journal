import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// const routes: Routes = [
  
// ];
const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'kids', loadChildren: () => import('./features/kids/kids.module').then(m => m.KidsModule) },
  { path: 'family', loadChildren: () => import('./features/family/family.module').then(m => m.FamilyModule) },
  { path: 'schedule', loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule) },
  { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
  { path: 'reception', loadChildren: () => import('./reception/reception.module').then(m => m.ReceptionModule) },
  { path: 'location', loadChildren: () => import('./location/location.module').then(m => m.LocationModule) },
  { path: 'carousel', loadChildren: () => import('./carousel/carousel.module').then(m => m.CarouselModule) },
  { path: 'rsvp', loadChildren: () => import('./rsvp/rsvp.module').then(m => m.RsvpModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'fun', loadChildren: () => import('./features/fun/fun.module').then(m => m.FunModule) },
  { path: 'couple-story', loadChildren: () => import('./features/couple-story/couple-story.module').then(m => m.CoupleStoryModule) },
  { path: 'countdown', loadChildren: () => import('./features/countdown/countdown.module').then(m => m.CountdownModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  // future lazy modules: '/family', '/gallery', '/kids' etc.
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
