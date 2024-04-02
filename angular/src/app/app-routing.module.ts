import { ComponentFixture } from '@angular/core/testing';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OffreAdminComponent } from './pages/offre-admin/offre-admin.component';
import { CalendarClientComponent } from './pages/calendar-client/calendar-client.component';
import { ReclamComponent } from './pages/reclam/reclam.component';
import { CoursAdminComponent } from './pages/cours-admin/cours-admin.component';
import { ClientAdminComponent } from './pages/client-admin/client-admin.component';
import { OffresComponent } from './pages/offres/offres.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'offreAdmin',
    component: OffreAdminComponent
  },
  {
    path: 'offre',
    component: OffresComponent
  },
  {
    path: 'courAdmin',
    component: CoursAdminComponent
  },
  {
    path: 'clientAdmin',
    component: ClientAdminComponent
  },
  {
    path: 'calendar-client',
    component: CalendarClientComponent
  },
  {
    path: 'reclam',
    component: ReclamComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }