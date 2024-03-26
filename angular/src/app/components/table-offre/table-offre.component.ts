import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OffreService } from '../../services/offre-service.service';
import { Offre } from '../../Offre';

@Component({
  selector: 'app-table-offre',
  templateUrl: './table-offre.component.html',
  styleUrls: ['./table-offre.component.css']
})
export class TableOffreComponent implements OnInit {
  offreData: any;
  formValue: FormGroup = new FormGroup({});
  offreObject: Offre = new Offre();
  selectOptions: { value: string, label: string }[] = [];

  constructor(private api: OffreService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      offreId: [''],
      offreNom: [''],
      offreDetail: [''],
      offrePrix: [''],
      offreCour: ['']
    });

    this.getAllOffre();
    this.getCours();
  }

  getAllOffre() {
    this.api.getOffres().subscribe(
      res => this.offreData = res,
      error => console.error('Error fetching data for table:', error)
    );
  }

  getCours() {
    this.api.getCours().subscribe(
      data => {
        this.selectOptions = data.map((cour: any) => {
          return { value: cour.courId, label: cour.courNom };
        });
      },
      error => console.error('Error fetching data:', error)
    );
  }

  deleteOffres(row: any) {
    this.api.deleteOffre(row.offreId).subscribe(() => {
      this.getAllOffre();
    });
  }

  onEdit(row: any) {
    this.offreObject.offreId = row.offreId;
    this.formValue.controls['offreNom'].setValue(row.offreNom);
    this.formValue.controls['offreDetail'].setValue(row.offreDetail);
    this.formValue.controls['offrePrix'].setValue(row.offrePrix);
    this.formValue.controls['offreCour'].setValue(row.offreCour);
  }

  updateOffre() {
    this.offreObject.offreNom = this.formValue.value.offreNom;
    this.offreObject.offrePrix = this.formValue.value.offrePrix;
    this.offreObject.offreDetail = this.formValue.value.offreDetail;
    this.offreObject.offreCour = this.formValue.value.offreCour;

    this.api.updateOffre(this.offreObject, this.offreObject.offreId)
      .subscribe(res => {
        alert("updated offre");
        let ref = document.getElementById("cancel");
        ref?.click();
        this.formValue.reset();
        this.getAllOffre();
      });
  }
}