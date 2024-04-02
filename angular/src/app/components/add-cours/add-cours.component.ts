import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CourService } from '../../services/cour-service.service';
import { Cour } from '../../Cour';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrl: './add-cours.component.css'
})
export class AddCoursComponent implements OnInit{
  formValue!: FormGroup;
  courObject:Cour = new Cour();

  constructor(private formBuilder: FormBuilder, private apiCour:CourService ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      courNom: [''],
      courDetail: [''],
      courCoach: ['']
    });
  }

  addCours() {
    this.courObject.courCoach=this.formValue.value.courCoach;
    this.courObject.courDetail=this.formValue.value.courDetail;
    this.courObject.courNom=this.formValue.value.courNom;


    this.apiCour.createCour(this.courObject)
    .subscribe(res=>{
      console.log(res);
      let ref = document.getElementById("cancel");
      ref?.click();
      this.formValue.reset();
    },
    (err: any) => { 
      alert("Error");
    });
  }


}