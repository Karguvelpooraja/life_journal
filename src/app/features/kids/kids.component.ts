import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  constructor() { }

 
  kidsImages: string[] = [
    '/assets/images/kid1.jpg',
    '/assets/images/kid2.jpg',
    '/assets/images/kid3.jpg',
    '/assets/images/kid4.jpg',
    '/assets/images/kid5.jpg',
    '/assets/images/kid6.jpg',
    '/assets/images/kid7.jpg',
    '/assets/images/kid8.jpg',
    '/assets/images/kid9.jpg',
    '/assets/images/kid10.jpg',
    '/assets/images/kid11.jpg',
    '/assets/images/kid12.jpg'
  ];

  currentIndex = 0;

  ngOnInit() {
    // Auto slide every 3 seconds
    setInterval(() => {
      this.next();
    }, 3000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.kidsImages.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.kidsImages.length) %
      this.kidsImages.length;
  }

}
