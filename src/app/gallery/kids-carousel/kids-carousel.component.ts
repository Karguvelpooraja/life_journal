import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids-carousel',
  templateUrl: './kids-carousel.component.html',
  styleUrls: ['./kids-carousel.component.css']
})
export class KidsCarouselComponent implements OnInit {

  currentIndex = 0;

  kids = [
    { image: 'assets/images/kid1.jpg', name: 'Dhruv', nickname: 'Chinnu', quote: 'The little star who brightens every day ✨' },
    { image: 'assets/images/kid2.jpg', name: 'Anaya', nickname: 'Pinky', quote: 'Smiles that melt hearts ❤️' },
    { image: 'assets/images/kid3.jpg', name: 'Aarav', nickname: 'Bunny', quote: 'Energy in every giggle 😄' },
    { image: 'assets/images/kid4.jpg', name: 'Mithra', nickname: 'Mithu', quote: 'Cutest joy of the family 💕' },
    { image: 'assets/images/kid5.jpg', name: 'Rithik', nickname: 'Rithu', quote: 'Our naughty sunshine ☀️' }
  ];

  balloons = Array(8).fill(0); // floating decorations

  ngOnInit() {
    setInterval(() => this.nextSlide(), 3500);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.kids.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.kids.length) % this.kids.length;
  }
}
