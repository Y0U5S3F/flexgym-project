import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TableCalendarService } from './../../services/table-calendar.service';
import { CourService } from '../../services/cour-service.service';
import { Calendrier } from '../../Calendrier';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-table-calendar',
    templateUrl: './table-calendar.component.html',
    styleUrls: ['./table-calendar.component.css']
})
export class TableCalendarComponent implements OnInit {
  semaine: Calendrier[][] = Array(24).fill(null).map(() => Array(7).fill(null));
  courNoms: { [id: number]: string } = {};
  formValue: any;

  constructor(private router: Router, private calendrierService: TableCalendarService, private courService: CourService, private formBuilder: FormBuilder ) { 
    this.formValue = this.formBuilder.group({
      activiteId: ['', Validators.required],
      activiteJour: ['', Validators.required],
      activiteTemps: ['', Validators.required],
      activiteCour: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadActivities();
  }
  
  onEdit(activite: Calendrier) {
    this.formValue.controls['activiteId'].setValue(activite.activiteId);
    this.formValue.controls['activiteJour'].setValue(activite.activiteJour);
    this.formValue.controls['activiteTemps'].setValue(activite.activiteTemps);
    this.formValue.controls['activiteCour'].setValue(activite.activiteCour);
  }
  
  updateActivite() {
    const activite: Calendrier = {
      activiteId: this.formValue.value.activiteId,
      activiteJour: this.formValue.value.activiteJour,
      activiteTemps: this.formValue.value.activiteTemps,
      activiteCour: this.formValue.value.activiteCour
    };
  
    this.calendrierService.updateActivite(activite, activite.activiteId)
      .subscribe(res => {
        alert("Updated Activite");
        let ref = document.getElementById("close");
        ref?.click();
        this.formValue.reset();
        this.loadActivities();
        this.router.navigate(['/calendarAdmin']);
      });
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

  deleteActivite(activiteId: number){
    this.calendrierService.deleteActivite(activiteId).subscribe(() => {
      this.loadActivities();
    });    
  }
}