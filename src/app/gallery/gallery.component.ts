import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  weddingPhotos = [
    'assets/images/wedding1.jpg',
    'assets/images/wedding2.jpg',
    'assets/images/wedding3.jpg',
    'assets/images/wedding4.jpg',
    'assets/images/wedding5.jpg'
  ];

  familyPhotos = [
    'assets/images/family1.jpg',
    'assets/images/family2.jpg',
    'assets/images/family3.jpg',
    'assets/images/family4.jpg'
  ];

  selectedPhoto: string | null = null;
  petals = Array(15);

  ngOnInit(): void {
    setTimeout(() => this.randomizePetals(), 100);
  }

  openLightbox(photo: string) {
    this.selectedPhoto = photo;
  }

  closeLightbox() {
    this.selectedPhoto = null;
  }

  randomizePetals() {
    const petals = document.querySelectorAll('.petal');
    petals.forEach(p => {
      const el = p as HTMLElement;
      el.style.left = `${Math.random() * 100}%`;
      el.style.animationDelay = `${Math.random() * 10}s`;
      el.style.animationDuration = `${8 + Math.random() * 6}s`;
      el.style.backgroundColor = this.randomColor();
    });
  }

  randomColor() {
    const colors = ['#ffccd5', '#ffc1cc', '#ffd6e0', '#ffe6eb'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
