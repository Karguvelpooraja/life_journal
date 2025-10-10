import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mapUrl = 'https://maps.app.goo.gl/zFbeubbgxK8xir4j7'; // replace with your map
  // mapUrl = 'https://www.google.com/maps/d/embed?mid=1wRTuj6_ExampleRoute'; // replace with your map

  routes = [
    {
      title: 'Marriage Venue → Tiruchendur Temple',
      desc: 'Main Wedding Ceremony at Tiruchendur Murugan Temple (Morning 9:30 AM – 10:30 AM).',
      bus: 'Tuticorin – Tiruchendur Bus No: 15A, 37, 45',
      time: 'Approx 1 hr from Tuticorin',
      icon: '🛕'
    },
    {
      title: 'Post Marriage → Kayalpattinam',
      desc: 'Photo session + Lunch with Bride family at Kayalpattinam.',
      bus: 'Tiruchendur – Kayalpattinam local buses every 15 min',
      time: '25 min travel',
      icon: '🍛'
    },
    {
      title: 'Reception → Puthunainarpuram',
      desc: 'Evening Reception at Puthunainarpuram (near Eral /Sawyerpuram).',
      bus: 'Kayalpattinam – Eral – Sawyerpuram – Puthunainarpuram route available',
      time: '45 min travel',
      icon: '🎉'
    }
  ];

 

}
