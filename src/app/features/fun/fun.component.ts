import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {

  kidsImages: string[] = [
    'assets/images/kid1.jpg',
    'assets/images/kid2.jpg',
    'assets/images/kid3.jpg',
    'assets/images/kid4.jpg',
    'assets/images/kid5.jpg',
    'assets/images/kid6.jpg'
  ];

  currentSlide = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkVisibility();
  }

  getTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.kidsImages.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.kidsImages.length) % this.kidsImages.length;
  }

  private checkVisibility() {
    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll, .slide');
    const windowHeight = window.innerHeight;

    elements.forEach((el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

}
