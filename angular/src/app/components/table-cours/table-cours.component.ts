import { Component, OnInit } from '@angular/core';
import { CourService } from '../../services/cour-service.service';
import { Cour } from '../../Cour';
import { PersonnelService } from '../../services/personnel-service.service';
import { Personnel } from '../../Personnel';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-cours',
  templateUrl: './table-cours.component.html',
  styleUrls: ['./table-cours.component.css']
})
export class TableCoursComponent implements OnInit {
  coursData!: any;
  totalLength: any;
  page: number = 1;
  searchText ='';
  personnelData!: Personnel[];
  formValue: FormGroup = new FormGroup({});
  coursObject: Cour = new Cour();

  constructor(private apiCour: CourService, private apiPersonnel: PersonnelService, private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getAllCours();
    this.getAllPersonnels();
    this.formValue = this.formbuilder.group({
      courNom: [''],
      courDetail: [''],
      courCoach: ['']
    });
  }

  getCoachNameById(id: number): string {
    const coach = this.personnelData.find(person => person.personnelId === id);
    return coach ? `${coach.personnelNom} ${coach.personnelPrenom}` : 'Unknown';
  }

  getAllPersonnels() {
    this.apiPersonnel.getPersonnels().subscribe((res: Personnel[]) => {
      this.personnelData = res;
    });
  }

  getAllCours() {
    this.apiCour.getCours().subscribe((res: any) => {
      this.coursData = res;
    });
  }

  deleteCours(row: any) {
    this.apiCour.deleteCour(row.id).subscribe(() => {
      this.getAllCours();
    });
  }

  onEdit(row: any) {
    this.coursObject.courId = row.courId;
    this.formValue.controls['courNom'].setValue(row.courNom);
    this.formValue.controls['courDetail'].setValue(row.courDetail);
    this.formValue.controls['courCoach'].setValue(row.courCoach);
  }

  updateCours() {
    this.coursObject.courNom = this.formValue.value.courNom;
    this.coursObject.courDetail = this.formValue.value.courDetail;
    this.coursObject.courCoach = this.formValue.value.courCoach;

    this.apiCour.updateCour(this.coursObject, this.coursObject.courId).subscribe((res: any) => {
      alert("Cours updated successfully");
      let ref = document.getElementById("cancel");
      ref?.click();
      this.formValue.reset();
      this.getAllCours();
    });
  }
}