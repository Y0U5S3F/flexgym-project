import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('FlexGym - Cours');
  }
}
