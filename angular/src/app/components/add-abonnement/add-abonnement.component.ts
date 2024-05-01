import { Component } from '@angular/core';
import { Client } from '../../Client';
import { ClientService } from '../../services/client-service.service';
import { Abonnement } from '../../Abonnement';
import { AbonnementService } from '../../services/abonnement-service.service';
import { Offre } from '../../Offre';
import { OffreService } from '../../services/offre-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-abonnement',
  templateUrl: './add-abonnement.component.html',
  styleUrl: './add-abonnement.component.css'
})
export class AddAbonnementComponent {
  formValue!: FormGroup;
  clientObject: Client = new Client();
  selectOptions: { value: string, label: string }[] = [];
  getClientOptions: { value: string, label: string }[] = [];
  getOffreOptions: { value: number, label: string }[] = [];
  abonnementObject: Abonnement = new Abonnement();

  constructor(private formBuilder: FormBuilder, private abonnementService: AbonnementService, private apiOffre: OffreService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      abonnementType: [''],
      abonnementProp: [''],
      debutDate: [''],
      finDate: ['']
    });
    this.getOffres();
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
  
  addAbonnement() {
    this.abonnementObject.abonnementType = this.formValue.value.abonnementType;
    this.abonnementObject.abonnementProp = this.formValue.value.abonnementProp;
    this.abonnementObject.debutDate = this.formValue.value.debutDate;
    this.abonnementObject.finDate = this.formValue.value.finDate;
    
    this.abonnementService.createAbonnement(this.abonnementObject).subscribe(res => {
      console.log(res);
      let ref = document.getElementById("cancel");
      ref?.click();
      this.formValue.reset();
    },
    err=>{
      console.error(err);
      alert(err.message)
    });
  }
}
