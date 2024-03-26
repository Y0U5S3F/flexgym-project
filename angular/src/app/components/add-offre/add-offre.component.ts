import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { OffreService } from '../../services/offre-service.service';
import { Offre } from './../../Offre';
import { Cour } from './../../Cour';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {
  formValue !: FormGroup;
  offreObject:Offre = new Offre();
  selectOptions: any[] = [];

  constructor(private formbuilder: FormBuilder, private api : OffreService ){}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      offreNom : [''],
      offreDetail : [''],
      offrePrix : [''],
      offreCour : ['']
    })

    this.api.getCours().subscribe(
      (data: any) => {
        this.selectOptions = data.map((cour: any) => {
          return { value: cour.courId, label: cour.courNom };
        });
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  postOffre(){
    this.offreObject.offreNom=this.formValue.value.offreNom;
    this.offreObject.offrePrix=this.formValue.value.offrePrix;
    this.offreObject.offreDetail=this.formValue.value.offreDetail;
    this.offreObject.offreCour=this.formValue.value.offreCour;

    this.api.createOffre(this.offreObject)
      .subscribe(res=>{
        console.log(res);
        let ref = document.getElementById("cancel");
        ref?.click();
        this.formValue.reset();
      },
      err=>{
        alert(err.message)
      })
  }
}