
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableCalendarService {
  private apiUrl = ''; 

  constructor(private http: HttpClient) { }

  getWeekActivities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}