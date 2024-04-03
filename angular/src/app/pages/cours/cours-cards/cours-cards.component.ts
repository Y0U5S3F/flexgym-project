import { Component, OnInit } from '@angular/core';
import { Cour } from '../../../Cour';
import { CourService } from '../../../services/cour-service.service';

@Component({
  selector: 'app-cours-cards',
  templateUrl: './cours-cards.component.html',
  styleUrl: './cours-cards.component.css'
})
export class CoursCardsComponent implements OnInit{
  cours: Cour[] = [];

  constructor(private courService: CourService) { }

  ngOnInit() {
    this.courService.getCours().subscribe(data => {
      this.cours = data;
    });
  }
}
