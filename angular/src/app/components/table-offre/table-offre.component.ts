import { Component, OnInit } from '@angular/core';
import { OffreService } from '../../services/offre-service.service';
import { Offre } from '../../Offre';
import {FormBuilder,FormGroup} from '@angular/forms'



@Component({
  selector: 'app-table-offre',
  templateUrl: './table-offre.component.html',
  styleUrls: ['./table-offre.component.css']
})
export class TableOffreComponent implements OnInit{
  offreData !: any;
  formValue !: FormGroup;
  offreObject:Offre = new Offre();
  constructor(private api : OffreService, private formbuilder: FormBuilder) {
  }
  ngOnInit(): void {
      this.getAllOffre();
      this.formValue = this.formbuilder.group({
        offreNom : [''],
        offreDetail : [''],
        offrePrix : ['']
      })
  }
  getAllOffre(){
    this.api.getOffre()
    .subscribe(res=>{
      this.offreData = res;
    })
  }
  deleteOffres(row:any){
    this.api.deleteOffre(row.id).subscribe(() => {
      this.getAllOffre(); 
    });
  }
  onEdit(row:any){
    this.offreObject.id=row.id;
    this.formValue.controls['offreNom'].setValue(row.offreNom);
    this.formValue.controls['offreDetail'].setValue(row.offreDetail);
    this.formValue.controls['offrePrix'].setValue(row.offrePrix);

  }

  updateOffre(){
    this.offreObject.offreNom=this.formValue.value.offreNom;
    this.offreObject.offrePrix=this.formValue.value.offrePrix;
    this.offreObject.offreDetail=this.formValue.value.offreDetail;
    this.api.updateOffre(this.offreObject,this.offreObject.id)
    .subscribe(res=>{
      alert("updated offre");
      let ref = document.getElementById("cancel");
      ref?.click();
      this.formValue.reset();
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
