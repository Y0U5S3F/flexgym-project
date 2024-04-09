import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-offre-admin',
  templateUrl: './offre-admin.component.html',
  styleUrl: './offre-admin.component.css'
})
export class OffreAdminComponent {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('FlexGym - Management');
  }
  
}