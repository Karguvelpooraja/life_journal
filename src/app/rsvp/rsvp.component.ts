import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  guestName: string = '';
  attending: string = '';
  message: string = '';
  submitted = false;

  submitForm() {
    if (!this.guestName || !this.attending) {
      alert('Please fill all required fields');
      return;
    }

    this.submitted = true;
    // later, you can send this data to your backend API here
    alert(`Thank you, ${this.guestName}! Your response has been submitted.`);
    this.guestName = '';
    this.attending = '';
    this.message = '';
  }

}
