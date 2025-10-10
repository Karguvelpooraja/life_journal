import { Component, OnInit } from '@angular/core';

interface WeddingEvent {
  name: string;
  date: string;
  time: string;
  location: string;
  description?: string;
}

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  events: WeddingEvent[] = [];

  ngOnInit() {
    this.events = [
      {
        name: 'Mukkurtham',
        date: 'November 23, 2025',
        time: '9:30 AM',
        location: 'Tiruchendur Temple',
        description: 'Traditional Mukkurtham Ceremony.'
      },
      {
        name: 'Lunch',
        date: 'November 23, 2025',
        time: '12:30 PM',
        location: 'Wedding Hall',
        description: 'Delicious South Indian Veg Feast.'
      },
      {
        name: 'Reception',
        date: 'November 23, 2025',
        time: '6:30 PM',
        location: 'Hotel Sri Rama Palace',
        description: 'Reception & Celebration with Music.'
      }
    ];
  }

}
