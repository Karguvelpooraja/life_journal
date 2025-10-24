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

  // ngOnInit() {
  //   this.checkVisibility();
  // }

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
  ngOnInit() {
  this.checkVisibility();
  // this.createBalloons(15); // create 15 floating balloons
}

createBalloons(count: number) {
  const colors = ['red', 'blue', 'yellow'];
  const container = document.querySelector('.kids-page') as HTMLElement;

  for (let i = 0; i < count; i++) {
    const balloon = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    balloon.classList.add('balloon', color);

    // random horizontal position and animation duration
    balloon.style.left = Math.random() * 90 + 'vw';
    balloon.style.animationDuration = 5 + Math.random() * 5 + 's';
    balloon.style.width = 30 + Math.random() * 40 + 'px';
    balloon.style.height = 40 + Math.random() * 60 + 'px';

    container.appendChild(balloon);
  }
}


}
