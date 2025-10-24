import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  kids = [
    { name: 'Seethu', nickname: 'Little Star ✨', image: 'assets/images/kid1.jpg' },
    { name: 'Jak', nickname: 'Cutie Hero 💫', image: 'assets/images/kid2.jpg' },
    { name: 'Ananthi', nickname: 'Sweet Angel 🌸', image: 'assets/images/kid3.jpg' },
    { name: 'Aji', nickname: 'Happy Champ 🏆', image: 'assets/images/kid4.jpg' }
  ];

  currentKidIndex = 0;
  currentKid = this.kids[0];
  isPaused = false;
  intervalId: any;

  balloons = Array(10);
  hearts = Array(8);
  sparkles = Array(15);

  ngOnInit(): void {
    this.startSlideshow();
    setTimeout(() => this.randomizeFloatingObjects(), 100);
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.currentKidIndex = (this.currentKidIndex + 1) % this.kids.length;
        this.currentKid = this.kids[this.currentKidIndex];
      }
    }, 3000);
  }

  togglePause() {
    this.isPaused = !this.isPaused;
  }

  randomizeFloatingObjects() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
      (balloon as HTMLElement).style.left = `${Math.random() * 100}%`;
      (balloon as HTMLElement).style.animationDelay = `${Math.random() * 10}s`;
      (balloon as HTMLElement).style.backgroundColor = this.getRandomColor();
    });

    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
      (heart as HTMLElement).style.left = `${Math.random() * 100}%`;
      (heart as HTMLElement).style.animationDelay = `${Math.random() * 10}s`;
    });

    const sparkles = document.querySelectorAll('.sparkle');
    sparkles.forEach(spark => {
      (spark as HTMLElement).style.left = `${Math.random() * 100}%`;
      (spark as HTMLElement).style.animationDelay = `${Math.random() * 8}s`;
    });
  }

  getRandomColor() {
    const colors = ['#ff6699', '#ff99cc', '#ff3366', '#ff66b2'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
