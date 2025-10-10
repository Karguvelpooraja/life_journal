import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  groomFamily = [
    { name: 'Pongal Durai', relation: 'Father', img: '/assets/images/father.jpg' },
    { name: 'Pathirakali', relation: 'Mother', img: '/assets/images/mother.jpg' },
    { name: 'Palkani', relation: 'Elder Sister', img: '/assets/images/sister1.jpg' },
    { name: 'Ananthi', relation: 'Younger Sister', img: '/assets/images/sister2.jpg' },
    { name: 'Younger Sister (recently married)', relation: 'Sister', img: '/assets/images/sister3.jpg' },
    { name: 'Jayalakshmi (Jak)', relation: 'Youngest Sister - IT Student', img: '/assets/images/jak.jpg' }
  ];

  brideFamily = [
    { name: 'Murugaraj', relation: 'Father', img: '/assets/images/anu-father.jpg' },
    { name: 'Kala', relation: 'Mother', img: '/assets/images/anu-mother.jpg' },
    { name: 'Karthi', relation: 'Brother', img: '/assets/images/anu-brother1.jpg' },
    { name: 'Marimuthu', relation: 'Brother', img: '/assets/images/anu-brother2.jpg' }
  ];

}
