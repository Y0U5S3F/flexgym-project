import { Component } from '@angular/core';
import { Abonnement } from '../../Abonnement';
import { AbonnementService } from '../../services/abonnement-service.service';
import { ClientService } from '../../services/client-service.service';
import { Client } from '../../Client';
import { Offre } from '../../Offre';
import { OffreService } from '../../services/offre-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-table-abonnement',
  templateUrl: './table-abonnement.component.html',
  styleUrls: ['./table-abonnement.component.css']
})
export class TableAbonnementComponent {
  totalLength: any;
  page: number = 1;
  abonnementObject: Abonnement = new Abonnement();
  searchText ='';
  formValue: FormGroup = new FormGroup({});
  selectOptions: { value: string, label: string }[] = [];
  getClientOptions: { value: string, label: string }[] = [];
  getOffreOptions: { value: number, label: string }[] = [];
  abonnementData: any;

  constructor(private apiAbonnement: AbonnementService,private apiOffre: OffreService,private apiClient: ClientService ,private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      abonnementId: [''],
      abonnementEtat: [''],
      abonnementType: [''],
      abonnementProp: [''],
      debutDate: [''],
      finDate: ['']
    });
    this.getAllAbonnement();
    this.getClients();
    this.getOffres();
}

getClients() {
  this.apiClient.getClients().subscribe({
    next: data => {
      this.getClientOptions = data.map((client: Client) => {
        return { value: client.clientId, label: `${client.clientNom} ${client.clientPrenom}` };
      });
    },
    error: error => console.error('Error fetching data:', error)
  });
}

getClientNameById(id: number): string {
  const client = this.getClientOptions.find((client:any) => client.value === id);
  return client ? `${client.label}` : 'Unknown';
}

getOffres() {
  this.apiOffre.getOffres().subscribe({
    next: data => {
      this.getOffreOptions = data.map((offre: Offre) => {
        return { value: offre.offreId, label: `${offre.offreNom}` };
      });
    },
    error: error => console.error('Error fetching data:', error)
  });
}

getOffreNameById(id: number): string {
  const offre = this.getOffreOptions.find((offre:any) => offre.value === id);
  return offre ? `${offre.label}` : 'Unknown';
}

getAllAbonnement() {
  this.apiAbonnement.getAbonnements().subscribe(
    res => this.abonnementData = res,
    error => console.error('Error fetching data for table:', error)
  );
}

getAbonnements() {
  this.apiAbonnement.getAbonnements().subscribe({
    next: data => {
      this.selectOptions = data.map((abonnement: any) => {
        return { value: abonnement.abonnementId, label: abonnement.abonnementType };
      });
    },
    error: error => console.error('Error fetching data:', error)
  });
}

deleteAbonnement(row: any) {
  this.apiAbonnement.deleteAbonnement(row.abonnementId).subscribe(() => {
    this.getAllAbonnement();
  });
}

onEdit(row: any) {
  this.abonnementObject.abonnementId = row.abonnementId;
  this.formValue.controls['abonnementType'].setValue(row.abonnementType);
  this.formValue.controls['abonnementProp'].setValue(row.abonnementProp);
  this.formValue.controls['debutDate'].setValue(row.debutDate);
  this.formValue.controls['finDate'].setValue(row.finDate);
}

updateAbonnement() {
  this.abonnementObject.abonnementType = this.formValue.value.abonnementType;
  this.abonnementObject.abonnementProp = this.formValue.value.abonnementProp;
  this.abonnementObject.debutDate = this.formValue.value.debutDate;
  this.abonnementObject.finDate = this.formValue.value.finDate;

  this.apiAbonnement.updateAbonnement(this.abonnementObject, this.abonnementObject.abonnementId)
    .subscribe(res => {
      let ref = document.getElementById("close");
      ref?.click();
      this.formValue.reset();
      this.getAllAbonnement();
    });
  }
}