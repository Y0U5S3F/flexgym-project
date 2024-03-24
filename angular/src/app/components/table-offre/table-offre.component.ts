import { Component } from '@angular/core';
import { OffreService } from '../../services/offre-service.service'
import { Offre } from '../../Offre';


@Component({
  selector: 'app-table-offre',
  templateUrl: './table-offre.component.html',
  styleUrls: ['./table-offre.component.css']
})
export class TableOffreComponent {
  offres!: Offre[];

  constructor(private offreService: OffreService) {
  }

  ngOnInit(){
    this.fetchOffre();
  }

  fetchOffre(){
    this.offreService.getOffers().subscribe(data=>{
      this.offres=data
    })
  }



}

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-table-offre',
//   templateUrl: './table-offre.component.html',
//   styleUrls: ['./table-offre.component.css']
// })
// export class TableOffreComponent {
//   offresForm: FormGroup;
//   offres = [
//     { offreID: 1, offreNom: 'Judo', detailOffre: 'Sport Combat', prixOffre: 50, editable: false },
//     { offreID: 2, offreNom: 'Karate', detailOffre: 'Art Martial', prixOffre: 60, editable: false },
//     { offreID: 3, offreNom: 'Muay Thai', detailOffre: 'Art Martial', prixOffre: 70, editable: false }
//   ];

//   constructor(private formBuilder: FormBuilder) {
//     this.offresForm = this.formBuilder.group({
//       offreNom: ['', Validators.required],
//       detailOffre: ['', Validators.required],
//       prixOffre: ['', Validators.required]
//     });
//   }

//   modifierOffre(offre: any) {
//     offre.editable = true;
//     this.offresForm.patchValue({
//       offreNom: offre.offreNom,
//       detailOffre: offre.detailOffre,
//       prixOffre: offre.prixOffre
//     });
//   }

//   validerModification(offre: any) {
//     offre.offreNom = this.offresForm.value.offreNom;
//     offre.detailOffre = this.offresForm.value.detailOffre;
//     offre.prixOffre = this.offresForm.value.prixOffre;
//     offre.editable = false;
//     // Now you can send your form data wherever you want
//     console.log("Form data:", this.offresForm.value);
//   }
// }
