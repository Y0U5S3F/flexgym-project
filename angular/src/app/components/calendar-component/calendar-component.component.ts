import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TableCalendarService } from './../../services/table-calendar.service';
import { CourService } from '../../services/cour-service.service';
import { Calendrier } from '../../Calendrier';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css']
})
export class CalendarComponentComponent {
  semaine: Calendrier[][] = Array(24).fill(null).map(() => Array(7).fill(null));
  courNoms: { [id: number]: string } = {};

  constructor(private router: Router, private calendrierService: TableCalendarService, private courService: CourService, private formBuilder: FormBuilder ) { 

  }

  ngOnInit(): void {
    this.loadActivities();
  }

  loadActivities(): void {
    this.calendrierService.getActivites().subscribe((data: Calendrier[]) => {
      this.semaineData(data);
      data.forEach((activite: Calendrier) => {
        this.getByIdCal(activite.activiteCour).subscribe((courNom: string) => {
          this.courNoms[activite.activiteCour] = courNom;
        });
      });
    });
  }
  
  getByIdCal(id: number): Observable<string> {
    return this.courService.getCour(id).pipe(map(res => String(res.courNom)));
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

  estVide(timeSlot: any[]): boolean {
    return timeSlot.some(course => course);
  }

}