import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cours-admin',
  templateUrl: './cours-admin.component.html',
  styleUrl: './cours-admin.component.css'
})
export class CoursAdminComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('FlexGym - Management');
  }
}
