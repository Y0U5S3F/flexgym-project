import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonnelService } from '../../services/personnel-service.service';
import { Personnel } from '../../Personnel';

@Component({
  selector: 'app-table-personnel',
  templateUrl: './table-personnel.component.html',
  styleUrls: ['./table-personnel.component.css']
})
export class TablePersonnelComponent implements OnInit {
  personnelData: any;
  totalLength: any;
  page: number = 1;
  searchText ='';
  formValue: FormGroup;

  constructor(private personnelService: PersonnelService, private formBuilder: FormBuilder) {
    this.formValue = this.formBuilder.group({
      personnelId: [''],
      personnelRole: [''],
      personnelNom: [''],
      personnelPrenom: [''],
      personnelEmail: [''],
      personnelPass: ['']
    });
  }

  ngOnInit(): void {
    this.getAllPersonnel();
  }

  getAllPersonnel() {
    this.personnelService.getPersonnels().subscribe(
      res => this.personnelData = res,
      error => console.error('Error fetching data for table:', error)
    );
  }

  deletePersonnel(row: any) {
    this.personnelService.deletePersonnel(row.personnelId).subscribe(() => {
      this.getAllPersonnel();
    });
  }

  onEdit(row: any) {
    this.formValue.controls['personnelId'].setValue(row.personnelId);
    this.formValue.controls['personnelRole'].setValue(row.personnelRole);
    this.formValue.controls['personnelNom'].setValue(row.personnelNom);
    this.formValue.controls['personnelPrenom'].setValue(row.personnelPrenom);
    this.formValue.controls['personnelEmail'].setValue(row.personnelEmail);
    this.formValue.controls['personnelPass'].setValue(row.personnelPass);
  }

  updatePersonnel() {
    let updatedPersonnel: Personnel = {
      personnelId: this.formValue.value.personnelId,
      personnelRole: this.formValue.value.personnelRole,
      personnelNom: this.formValue.value.personnelNom,
      personnelPrenom: this.formValue.value.personnelPrenom,
      personnelEmail: this.formValue.value.personnelEmail,
      personnelPass: this.formValue.value.personnelPass
    };

    this.personnelService.updatePersonnel(updatedPersonnel, updatedPersonnel.personnelId)
      .subscribe(res => {
        alert("Personnel updated");
        let ref = document.getElementById("cancel");
        ref?.click();
        this.formValue.reset();
        this.getAllPersonnel();
      });
  }
}