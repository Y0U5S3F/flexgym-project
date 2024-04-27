import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourService } from '../../services/cour-service.service';
import { Cour } from '../../Cour';
import { Personnel } from '../../Personnel';
import { PersonnelService } from '../../services/personnel-service.service';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {
  formValue!: FormGroup;
  courObject: Cour = new Cour();
  Image: File | null = null;
  selectOptions: any[] = [];

  constructor(private formBuilder: FormBuilder, private apiCour: CourService, private personnelService: PersonnelService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      courNom: ['', Validators.required],
      courDetail: ['', Validators.required],
      courCoach: ['', Validators.required],
      courImg: [null, Validators.required]
    });
  
    this.personnelService.getPersonnels().subscribe(
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

onFileChange(event: any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.Image = file;
  }
}

addCours() {
  const courData = {
    courNom: this.formValue.get('courNom')?.value,
    courDetail: this.formValue.get('courDetail')?.value,
    courCoach: this.formValue.get('courCoach')?.value
  };

  if (this.Image) {
    this.apiCour.createCour(courData, this.Image).subscribe(
      response => {
        console.log(response);
        this.formValue.reset();
        let ref = document.getElementById("cancel");
        ref?.click();
      },
      error => {
        console.error(error);
      }
    );
  }
}

}