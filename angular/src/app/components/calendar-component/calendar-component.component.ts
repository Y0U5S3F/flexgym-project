import { Component } from '@angular/core';
import { TableCalendarService } from './../../services/table-calendar.service';
import { CourService } from '../../services/cour-service.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css']
})
export class CalendarComponentComponent {
  semaine: any[][] = Array(24).fill(null).map(() => Array(7).fill(null));

  constructor(private calendrierService: TableCalendarService, private courService: CourService ) { }

  ngOnInit(): void {
    this.calendrierService.getActivites().subscribe(data => {
      this.semaineData(data);
    });
  }

  semaineData(data: any[]): void {
    const daysMap: any = {
      lundi: 0,
      mardi: 1,
      mercredi: 2,
      jeudi: 3,
      vendredi: 4,
      samedi: 5,
      dimanche: 6
    };

    data.forEach(course => {
      const dayIndex = daysMap[course.activiteJour];
      const timeIndex = parseInt(course.activiteTemps.split('-')[0]);
      this.semaine[timeIndex][dayIndex] = course;
    });
  }

  getByIdCal(id:number){
    this.courService.getCour(id).subscribe(res => {
      return String(res.courNom);
    });
  }

  estVide(timeSlot: any[]): boolean {
    return timeSlot.some(course => course);
  }
}