import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client-service.service';
import { Client } from '../../Client';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent implements OnInit {
  clientData!: any;
  formValue!: FormGroup;
  clientObject: Client = new Client();

  constructor(private api: ClientService, private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getAllClients();
    this.formValue = this.formbuilder.group({
      clientNom: [''],
      clientPrenom: [''],
      clientEmail: [''],
      clientPass: [''],
      clientTel: [''],
      clientDatenais: ['']
    });
  }

  getAllClients() {
    this.api.getClients().subscribe((res: any) => {
      this.clientData = res;
    });
  }

  deleteClient(row: any) {
    this.api.deleteClient(row.clientId).subscribe(() => {
      this.getAllClients();
    });
  }

  onEdit(row: any) {
    this.clientObject.clientId = row.clientId;
    this.formValue.controls['clientNom'].setValue(row.clientNom);
    this.formValue.controls['clientPrenom'].setValue(row.clientPrenom);
    this.formValue.controls['clientEmail'].setValue(row.clientEmail);
    this.formValue.controls['clientPass'].setValue(row.clientPass);
    this.formValue.controls['clientTel'].setValue(row.clientTel);
    this.formValue.controls['clientDatenais'].setValue(row.clientDatenais);
  }

  updateClient() {
    this.clientObject.clientNom = this.formValue.value.clientNom;
    this.clientObject.clientPrenom = this.formValue.value.clientPrenom;
    this.clientObject.clientEmail = this.formValue.value.clientEmail;
    this.clientObject.clientPass = this.formValue.value.clientPass;
    this.clientObject.clientTel = this.formValue.value.clientTel;
    this.clientObject.clientDatenais = this.formValue.value.clientDatenais;

    this.api.updateClient(this.clientObject, this.clientObject.clientId).subscribe((res: any) => {
      alert("Client mis à jour avec succès");
      let ref = document.getElementById("cancel");
      ref?.click();
      this.formValue.reset();
      this.getAllClients();
    });
  }
}