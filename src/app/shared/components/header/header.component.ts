import { DatePipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CalendarDays, Menu, Clock4, Power } from 'lucide-angular';
import { interval } from 'rxjs';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'b-header',
  imports: [DatePipe, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  readonly calendarIcon = CalendarDays;
  readonly menuIcon = Menu;
  readonly clockIcon = Clock4;
  readonly powerIcon = Power;

  orderStatus: 'open' | 'close' = 'close';

  today: Date = new Date();

  ngOnInit() {
    const timerSubscription = interval(60000).subscribe({
      next: (value) => (this.today = new Date()),
    });

    this.destroyRef.onDestroy(() => timerSubscription.unsubscribe());
  }
}
