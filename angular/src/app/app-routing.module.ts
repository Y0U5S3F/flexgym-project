import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OffreAdminComponent } from './pages/offre-admin/offre-admin.component';
import { CalendarClientComponent } from './pages/calendar-client/calendar-client.component';
import { ReclamComponent } from './pages/reclam/reclam.component';

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