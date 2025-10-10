import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids-carousel',
  templateUrl: './kids-carousel.component.html',
  styleUrls: ['./kids-carousel.component.css']
})
export class KidsCarouselComponent implements OnInit {

  constructor() { }

  currentIndex = 0;
  images = [
    'assets/images/kid1.jpg',
    'assets/images/kid2.jpg',
    'assets/images/kid3.jpg',
    'assets/images/kid4.jpg',
    'assets/images/kid5.jpg'
  ];

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
