import emailjs from 'emailjs-com';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  nom: string = '';
  prenom: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  
  sendEmail() {
    let data = {
        nom: this.nom,
        prenom: this.prenom,
        message: this.message,
        phone: this.phone,
        email: this.email
    };

    emailjs.send('service_w0zrk7h', 'template_yq6ckk5', data, 'XmAS5v5Nrvbldwayl')
        .then((result: any) => {
            console.log(result.text);
            this.nom = '';
            this.prenom = '';
            this.email = '';
            this.phone = '';
            this.message = '';
        }, (error) => {
            console.log(error.text);
        });
}

}