/*
import { Component, OnInit, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const container = this.el.nativeElement.querySelector('.confetti-container');

    for (let i = 0; i < 25; i++) {
      const confetti = this.renderer.createElement('div');
      this.renderer.addClass(confetti, 'confetti');

      const colors = ['#ff4081', '#ffeb3b', '#4caf50', '#2196f3', '#ff9800'];
      const size = Math.random() * 8 + 6 + 'px';
      const left = Math.random() * 100 + '%';
      const delay = Math.random() * 3 + 's';
      const duration = Math.random() * 4 + 3 + 's';

      this.renderer.setStyle(confetti, 'background', colors[Math.floor(Math.random() * colors.length)]);
      this.renderer.setStyle(confetti, 'width', size);
      this.renderer.setStyle(confetti, 'height', size);
      this.renderer.setStyle(confetti, 'left', left);
      this.renderer.setStyle(confetti, 'animation-delay', delay);
      this.renderer.setStyle(confetti, 'animation-duration', duration);

      this.renderer.appendChild(container, confetti);
    }
  }
}

*/
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weddingDate = new Date('2025-11-23T00:00:00');
  daysLeft!: number;
  hoursLeft!: number;
  minutesLeft!: number;
  secondsLeft!: number;

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
}


