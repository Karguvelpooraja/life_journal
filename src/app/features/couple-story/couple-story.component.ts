import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-couple-story',
  templateUrl: './couple-story.component.html',
  styleUrls: ['./couple-story.component.css']
})
export class CoupleStoryComponent implements OnInit {

  couplePhotos: string[] = [
    'assets/images/photo1.jpg',
    'assets/images/photo2.jpg',
    'assets/images/photo3.jpg',
    'assets/images/photo4.jpg',
    'assets/images/photo5.jpg'
  ];

  currentIndex = 0;
  autoSlideInterval: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.checkVisibility();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll, .story-item, .photo-carousel-section');
    const windowHeight = window.innerHeight;

    elements.forEach((el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // every 4 seconds
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.couplePhotos.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.couplePhotos.length) % this.couplePhotos.length;
  }

}
