import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableCalendarService } from './../../services/table-calendar.service';
import { CourService } from '../../services/cour-service.service';

@Component({
  selector: 'app-add-calendar',
  templateUrl: './add-calendar.component.html',
  styleUrls: ['./add-calendar.component.css']
})
export class AddCalendarComponent implements OnInit {
  formValue: FormGroup = this.formBuilder.group({});

  constructor(private calendrierService: TableCalendarService, private courService: CourService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      activiteJour: ['', Validators.required],
      activiteTemps: ['', Validators.required],
      activiteCour: ['', Validators.required]
    });
  }

  addActivite() {
    if (this.formValue.valid) {
      const activite = this.formValue.value;
      this.calendrierService.createActivite(activite).subscribe(
        res => {
          console.log('Activity added successfully');
        },
        err => {
          console.error('Error adding activity', err);
        }
      );
    }
  }
}