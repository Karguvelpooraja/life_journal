import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Family', path: '/family' },
    // { label: 'Fun', path: '/fun' },
    { label: 'Gallery', path: '/gallery' },
    // { label: 'Story', path: '/couple-story' },
    // { label: 'Directions', path: '/directions' },
    { label: 'Reception', path: '/reception' },
    { label: 'Kids', path: '/kids' },
    { label: 'Countdown', path: '/countdown' },
    // { label: 'RSVP', path: '/rsvp' },
    { label: 'Map', path: '/location' },
    { label: 'Corrosel', path: '/carousel' },
    { label: 'Contact', path: '/contact' },
    { label: 'Dashboard', path: '/dashboard' }
  ];

  closeNavbar() {
    const collapseEl = this.navbarCollapse?.nativeElement;
    if (collapseEl && collapseEl.classList.contains('show')) {
      const bsCollapse = new (window as any).bootstrap.Collapse(collapseEl, { toggle: false });
      bsCollapse.hide();
    }
  }

}
