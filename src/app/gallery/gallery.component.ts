import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  weddingPhotos = [
    'assets/images/wedding1.jpg',
    'assets/images/wedding2.jpg',
    'assets/images/wedding3.jpg'
  ];

  familyPhotos = [
    'assets/images/family1.jpg',
    'assets/images/family2.jpg',
    'assets/images/family3.jpg'
  ];

}
