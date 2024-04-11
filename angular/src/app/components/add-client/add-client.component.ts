import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client-service.service';
import { Client } from '../../Client';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent implements OnInit {
  formValue!: FormGroup;
  clientObject: Client = new Client();

  constructor(private formBuilder: FormBuilder,private clientService: ClientService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      clientNom: [''],
      clientPrenom: [''],
      clientEmail: [''],
      clientPass: [''],
      clientTel: [''],
      clientDatenais: ['']
    });
  }
  addClient() {
  this.clientObject.clientNom = this.formValue.value.clientNom;
  this.clientObject.clientPrenom = this.formValue.value.clientPrenom;
  this.clientObject.clientEmail = this.formValue.value.clientEmail;
  this.clientObject.clientPass = this.formValue.value.clientPass;
  this.clientObject.clientTel = this.formValue.value.clientTel;
  this.clientObject.clientDatenais = this.formValue.value.clientDatenais;
  console.log(this.formValue.value);
  
  this.clientService.createClient(this.clientObject).subscribe(res => {
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