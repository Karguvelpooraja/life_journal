import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receptionDetails = {
    groom: 'Karguvel Pooraja',
    bride: 'Anusty',
    date: 'November 23, 2025',
    time: '6:30 PM onwards',
    venue: 'Groom house, Puthunainarpuram',
    mapLink: 'https://maps.google.com/?q=Sri+Vari+Mahal,+Tiruchendur',
  };

  addToCalendar() {
    const { date, time, groom, bride, venue } = this.receptionDetails;
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Wedding Reception - ${groom} ❤️ ${bride}`
    )}&details=${encodeURIComponent(
      `Reception of ${groom} & ${bride} at ${venue}`
    )}&location=${encodeURIComponent(
      venue
    )}&dates=20251124T183000/20251124T223000`;
    window.open(calendarUrl, '_blank');
  }

  openMap() {
    window.open(this.receptionDetails.mapLink, '_blank');
  }
}
