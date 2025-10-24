import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  animations: [
    trigger('flipAnimation', [
      state('void', style({ transform: 'rotateX(90deg)', opacity: 0 })),
      transition(':enter', [
        style({ transform: 'rotateX(90deg)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'rotateX(0)', opacity: 1 }))
      ]),
      transition(':increment, :decrement', [
        style({ transform: 'rotateX(90deg)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'rotateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class CountdownComponent implements OnInit, OnDestroy {

  weddingDate = new Date('2025-11-23T00:00:00');
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private timer: any;

  get timeList() {
    return [
      { label: 'Days', value: this.days },
      { label: 'Hours', value: this.hours },
      { label: 'Minutes', value: this.minutes },
      { label: 'Seconds', value: this.seconds }
    ];
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.weddingDate.getTime() - now;

      if (distance < 0) {
        clearInterval(this.timer);
        this.days = this.hours = this.minutes = this.seconds = 0;
      } else {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}
