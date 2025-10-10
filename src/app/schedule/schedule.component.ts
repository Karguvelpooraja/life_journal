import { Component, OnInit } from '@angular/core';
interface WeddingEvent {
  name: string;
  date: string;
  time: string;
  location: string;
  description?: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

 events: WeddingEvent[] = [];

  ngOnInit() {
    this.events = [
      {
        name: 'Mukoortham Kaal Natuthal',
        date: 'November 22, 2025',
        time: 'Morning',
        location: 'Both Houses',
        description: 'Beginning of wedding celebrations in both families.'
      },
      {
        name: 'Thali Kattuthal',
        date: 'November 23, 2025',
        time: '9:30 AM - 10:30 AM',
        location: 'Tiruchendur Temple',
        description: 'Main wedding ceremony — sacred moment of tying the Thali.'
      },
      {
        name: 'Lunch & Photo Session',
        date: 'November 23, 2025',
        time: '12:30 PM',
        location: 'Kayalpattinam',
        description: 'Traditional South Tamil Nadu lunch & family photoshoot.'
      },
      {
        name: 'Reception',
        date: 'November 23, 2025',
        time: '6:30 PM',
        location: 'Puthunainar Puram (near Sawyerpuram, Tuticorin)',
        description: 'Grand reception with lights, music & celebration!'
      }
    ];
    
  }

}
