import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../../../services/client-service.service';
import { Client } from '../../../Client';
import { OffreService } from '../../../services/offre-service.service';
import { Offre } from '../../../Offre';
import { AbonnementService } from '../../../services/abonnement-service.service';
import { Abonnement } from '../../../Abonnement';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {

  clientData: any = {};
  formValue!: FormGroup;
  clientObject: Client = new Client();
  abonnements!: Abonnement[];
  offre!: Offre;

  constructor(
    private formbuilder: FormBuilder,
    private clientService: ClientService,
    private offreService: OffreService,
    private abonnementService: AbonnementService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      clientNom: [''],
      clientPrenom: [''],
      clientEmail: [''],
      clientPass: [''],
      clientTel: [''],
      clientDatenais: ['']
    });
  
    const userData = this.getUserData();
    if (userData) {
      this.getClient(userData);
    }
  }

  getClient(userData: any) {
    this.clientService.getClient(userData.id).subscribe((res: any) => {
      this.clientData = res;
      this.getAbonnements(this.clientData.clientId);
    });
  }

  PasswordStars(password: string): string {
    return password ? '*'.repeat(password.length) : '';
  }

  getAbonnements(clientId: string) {
    this.abonnementService.getAbonnements().subscribe((res: any) => {
      this.abonnements = res.filter((abonnement: Abonnement) => abonnement.abonnementProp === this.clientData.clientId);
      this.abonnements.forEach(abonnement => {
        this.offreService.getOffre(abonnement.abonnementType).subscribe((res: any) => {
          abonnement.abonnementType = res.offreNom;
        });
      });
    });
  }

  getUserData() {
    const userData = JSON.parse(localStorage.getItem('userData') as string);
    return userData ? userData : null;
  }

}