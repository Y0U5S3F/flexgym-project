import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-client-admin',
  templateUrl: './client-admin.component.html',
  styleUrl: './client-admin.component.css'
})
export class ClientAdminComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('FlexGym - Management');
  }

}
