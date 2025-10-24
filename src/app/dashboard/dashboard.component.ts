import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weddingDate = new Date('2025-11-23T00:00:00');
  daysLeft!: number;
  hoursLeft!: number;
  minutesLeft!: number;
  secondsLeft!: number;
  menuOpen = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
    this.checkVisibility();
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.weddingDate.getTime() - now;

    this.daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach((el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

}
