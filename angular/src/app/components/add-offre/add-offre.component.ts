import { Offre } from './../../Offre';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { OffreService } from '../../services/offre-service.service';
@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrl: './add-offre.component.css'
})
export class AddOffreComponent implements OnInit{
  formValue !: FormGroup;
  offreObject:Offre = new Offre();
  constructor(private formbuilder: FormBuilder, private api : OffreService ){}

  ngOnInit(): void {
      this.formValue = this.formbuilder.group({
        offreNom : [''],
        offreDetail : [''],
        offrePrix : ['']
      })
  }
  postOffre(){
    this.offreObject.offreNom=this.formValue.value.offreNom;
    this.offreObject.offrePrix=this.formValue.value.offrePrix;
    this.offreObject.offreDetail=this.formValue.value.offreDetail;
    this.api.createOffre(this.offreObject)
    .subscribe(res=>{
      console.log(res);
      let ref = document.getElementById("cancel");
      ref?.click();
      this.formValue.reset();
    },
    err=>{
      alert("Error")
    })
  }
  
}
