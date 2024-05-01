import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-abonnement-admin',
  templateUrl: './abonnement-admin.component.html',
  styleUrl: './abonnement-admin.component.css'
})
export class AbonnementAdminComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('FlexGym - Management');
  }
}
