import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Personnel } from '../../Personnel';
import { PersonnelService } from '../../services/personnel-service.service';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.css']
})
export class AddPersonnelComponent implements OnInit {
  formValue !: FormGroup;
  personnelObject: Personnel = new Personnel();

  constructor(private formbuilder: FormBuilder, private personnelService: PersonnelService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      personnelId: [''],
      personnelRole: [''],
      personnelNom: [''],
      personnelPrenom: [''],
      personnelEmail: [''],
      personnelPass: ['']
    });
  }

  postPersonnel() {
    this.personnelObject.personnelId = this.formValue.value.personnelId;
    this.personnelObject.personnelRole = this.formValue.value.personnelRole;
    this.personnelObject.personnelNom = this.formValue.value.personnelNom;
    this.personnelObject.personnelPrenom = this.formValue.value.personnelPrenom;
    this.personnelObject.personnelEmail = this.formValue.value.personnelEmail;
    this.personnelObject.personnelPass = this.formValue.value.personnelPass;

    this.personnelService.createPersonnel(this.personnelObject)
      .subscribe(res => {
        console.log(res);
        let ref = document.getElementById("cancel");
        ref?.click();
        this.formValue.reset();
      },
      err => {
        alert(err.message)
      })
  }
}