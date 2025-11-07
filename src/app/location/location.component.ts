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
  mapUrl = 'https://maps.app.goo.gl/zFbeubbgxK8xir4j7'; 
  // mapUrl = 'https://www.google.com/maps/d/embed?mid=1wRTuj6_ExampleRoute'; // replace with your map

  routes = [
  {
    title: 'Marriage Venue → Arulmigu Sri Karkuvel Ayyanar Temple',
    desc: 'Main Wedding Ceremony at Sri Karkuvel Ayyanar Temple ().',
    bus: 'Tuticorin – Tiruchendur Bus No: 15A, 37, 45',
    time: 'Morning 10:00 AM – 11:30 AM',
    icon: '🛕',
    mapLink: 'https://maps.app.goo.gl/9kuzcZ2q5uk2sQxo9' 
  },
  {
    title: 'Post Marriage → Kayalpattinam',
    desc: 'Photo session + Lunch with Bride family at Kayalpattinam.',
    bus: 'Tiruchendur – Kayalpattinam local buses every 15 min',
    time: 'Afternoon 12.30PM - 2.30PM',
    icon: '🍛',
    mapLink: 'https://maps.app.goo.gl/tMBQZgpdgP8TEoW2A' 
  },
  {
    title: 'Reception → Puthunainarpuram',
    desc: 'Evening Reception at Puthunainarpuram (near Eral / Sawyerpuram).',
    bus: 'Kayalpattinam – Eral – Sawyerpuram – Puthunainarpuram route available',
    time: 'Evening 5.30PM - 9.30PM',
    icon: '🎉',
    mapLink: 'https://maps.app.goo.gl/7ipjDsoCXhoW2XfY9'
  }
];

 

}
