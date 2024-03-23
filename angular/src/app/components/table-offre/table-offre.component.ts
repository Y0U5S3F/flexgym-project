import { Component } from '@angular/core';

interface Offre {
  offreID: number;
  offreNom: string;
  detailOffre: string;
  prixOffre: number;
}

@Component({
  selector: 'app-table-offre',
  templateUrl: './table-offre.component.html',
  styleUrls: ['./table-offre.component.css']
})
export class TableOffreComponent {
  offres: Offre[] = [];
  editStates: boolean[] = [];
  editingIndex: number | null = null;
  originalValues: Offre[] = [];

  constructor() {
    this.offres = [
      { offreID: 1, offreNom: 'Judo', detailOffre: 'Sport Combat', prixOffre: 50 },
      { offreID: 2, offreNom: 'Karate', detailOffre: 'Art Martial', prixOffre: 60 },
      { offreID: 3, offreNom: 'Muay Thai', detailOffre: 'Art Martial', prixOffre: 70 }
    ];
    this.editStates = new Array(this.offres.length).fill(false);
    this.originalValues = JSON.parse(JSON.stringify(this.offres));

  }

  modifierOffre(index: number) {
    this.editingIndex = index;
  }

  enregistrerModification(index: number) {
    this.editingIndex = null; 
  }

  annulerModification(index: number) {
    this.offres[index] = JSON.parse(JSON.stringify(this.originalValues[index])); 
    this.editingIndex = null; 
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
