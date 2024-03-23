import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Offre } from '../Offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private apiUrl = 'http://localhost/api/offre.php/';

  constructor(private http: HttpClient) { }

  getOffres(): Observable<Offre[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Offre[]>(url);
  }

  getOffre(offreId: number): Observable<Offre[]> {
    const url = `${this.apiUrl}${offreId}`;
    return this.http.get<Offre[]>(url);
  }

  updateOffre(offre: Offre): Observable<Offre> {
    const url = `${this.apiUrl}${offre.offreId}`;
    return this.http.put<Offre>(url, offre);
  }

  createOffre(offre: Offre): Observable<Offre> {
    const url = `${this.apiUrl}`;
    return this.http.post<Offre>(url, offre);
  }

  deleteOffre(offreId: number): Observable<void> {
    const url = `${this.apiUrl}${offreId}`;
    return this.http.delete<void>(url);
  }
}
