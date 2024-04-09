import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-calendar-client',
  templateUrl: './calendar-client.component.html',
  styleUrl: './calendar-client.component.css'
})
export class CalendarClientComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('FlexGym - Calendrier');
  }
}