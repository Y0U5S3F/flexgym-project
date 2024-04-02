import { Component, OnInit } from '@angular/core';
import { Offre } from '../../../Offre';
import { OffreService } from '../../../services/offre-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{
  offres: Offre[] = [];

  constructor(private offreService: OffreService) { }

  ngOnInit() {
    this.offreService.getOffres().subscribe(data => {
      this.offres = data;
    });
  }
}