import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openWhatsApp() {
    const phoneNumber = '8098278357'; // replace with your WhatsApp number
    const message = encodeURIComponent("Vanakkam! 🙏 I’d like to know more about Karguvel & Anusty’s wedding details.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }

}
