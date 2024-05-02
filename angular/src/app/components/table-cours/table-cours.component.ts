import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourService } from '../../services/cour-service.service';
import { Cour } from '../../Cour';
import { Personnel } from '../../Personnel';
import { PersonnelService } from '../../services/personnel-service.service';

@Component({
  selector: 'app-table-cours',
  templateUrl: './table-cours.component.html',
  styleUrls: ['./table-cours.component.css']
})
export class TableCoursComponent implements OnInit {
  coursData!: any;
  totalLength: any;
  Image: File | null = null;
  page: number = 1;
  searchText ='';
  personnelData!: Personnel[];
  formValue: FormGroup = new FormGroup({});
  coursObject: Cour = new Cour();
  selectOptions: { value: number, label: string }[] = [];

  constructor(private apiCour: CourService, private apiPersonnel: PersonnelService, private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getAllCours();
    this.getAllPersonnels();
    this.formValue = this.formbuilder.group({
      courNom: [''],
      courDetail: [''],
      courCoach: ['']
    });
    this.apiPersonnel.getPersonnels().subscribe(
      (data: any) => {
        this.selectOptions = data
          .filter((personnel: any) => personnel.personnelRole == 'Coach')
          .map((coach: any) => {
            return { value: coach.personnelId, label: `${coach.personnelNom} ${coach.personnelPrenom}` };
          });
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
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
    this.apiCour.deleteCour(row.courId).subscribe(() => {
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
  
    this.apiCour.updateCour(this.coursObject, this.coursObject.courId)
    .subscribe((res: any) => {
      alert("Cours updated successfully");
      let ref = document.getElementById("cancel");
      ref?.click();
      this.formValue.reset();
      this.getAllCours();
  
      if (this.Image) {
        this.apiCour.updateCourImg(this.Image, this.coursObject.courId)
        .subscribe({
          next: (res: any) => {
            console.log('Image updated successfully');
          },
          error: (err) => {
            console.error('Failed to update image', err);
          }
        });
      }
    });
  }
  
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.Image = file;
    }
  }
}