import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrl: './offres.component.css'
})
export class OffresComponent {
  constructor(private titleService: Title) { }
  
  ngOnInit() {
    this.titleService.setTitle('FlexGym - Offres');
  }
}
