import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-reclam',
  templateUrl: './reclam.component.html',
  styleUrl: './reclam.component.css'
})
export class ReclamComponent {
  constructor(private titleService: Title) { }
  
  ngOnInit() {
    this.titleService.setTitle('FlexGym - Offres');
  }
}
