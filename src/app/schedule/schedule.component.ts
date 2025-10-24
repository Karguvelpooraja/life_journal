import { Component, OnInit, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';

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
export class ScheduleComponent implements OnInit, AfterViewInit {
  events: WeddingEvent[] = [];
  isVisible: boolean[] = [];

  @ViewChildren('timelineItems') timelineItems!: QueryList<ElementRef>;

  ngOnInit() {
    this.events = [
      { name: 'Mukoortham Kaal Natuthal', date: 'Nov 22, 2025', time: '7:30 PM - 8:30 PM ', location: 'Both Houses', description: 'Beginning of wedding celebrations in both families.' },
      { name: 'Night dinner', date: 'Nov 22, 2025', time: '8:30 PM - 10:30 PM ', location: "Karguvel's House", description: 'Night dinner and playing card games' },
      { name: 'Mama sadangu', date: 'Nov 23, 2025', time: '7:00 AM - 8:00 AM', location: "Karguvel's House", description: 'Thai maman sadangu ceremony ' },
      { name: 'Groom welcome ceremony', date: 'Nov 23, 2025', time: '9:00 AM', location: "Anu's House", description: 'Groom welcome ceremony in bride house' },
      { name: 'Thali Kattuthal', date: 'Nov 23, 2025', time: '10:30 AM', location: 'Karguvel ayyanar Temple', description: 'Main wedding ceremony — sacred moment of tying the Thali.' },
      { name: 'Lunch & Photo Session', date: 'Nov 23, 2025', time: '12:30 PM', location: 'Kayalpattinam', description: 'Traditional South Tamil Nadu lunch & family photoshoot.' },
      { name: 'Bride welcome ceremony', date: 'Nov 23, 2025', time: '5:00 PM', location: "Karguvel's House", description: 'Bride welcome ceremony in groom house' },
      { name: 'Reception', date: 'Nov 23, 2025', time: '6:30 PM', location: 'Groom house ,Puthunainar Puram (near Sawyerpuram, Tuticorin)', description: 'Grand reception with lights & celebration!' }
    ];

    this.isVisible = Array(this.events.length).fill(false);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = Number(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting) {
          this.isVisible[index] = true;
        }
      });
    }, { threshold: 0.3 });

    this.timelineItems.forEach((item, idx) => {
      item.nativeElement.setAttribute('data-index', idx.toString());
      observer.observe(item.nativeElement);
    });
  }
}
