import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientService } from '../../../services/client-service.service';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.css']
})
export class CardTextComponent {
  
  clientName$: Observable<string | undefined>;

  constructor(
    private formBuilder: FormBuilder, 
    private apiClient: ClientService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { 
    this.clientName$ = this.getName();
  }

  getUserData() {
      const userData = JSON.parse(localStorage.getItem('userData') as string);
      return userData && userData.userType ? userData : null;
  }

  getName(): Observable<string | undefined> {
    const userData = this.getUserData();
    if (userData) {
      return this.apiClient.getClient(userData.id).pipe(
        map((res: any) => {
          return res.clientNom;
        })
      );
    }
    return new Observable<string | undefined>();
  }
}