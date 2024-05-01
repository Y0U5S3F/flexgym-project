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
import { CoursComponent } from './pages/cours/cours.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminUserTypeGuard, PersonnelUserTypeGuard, RegularUserTypeGuard } from './services/user-type.guard';
import { CalendarAdminComponent } from './pages/calendar-admin/calendar-admin.component';
import { PersonnelAdminComponent } from './pages/personnel-admin/personnel-admin.component';
import { AbonnementAdminComponent } from './pages/abonnement-admin/abonnement-admin.component';

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
    component: OffreAdminComponent,
    canActivate: [PersonnelUserTypeGuard]
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [RegularUserTypeGuard]
  },
  {
    path: 'cours',
    component: CoursComponent
  },
  {
    path: 'offre',
    component: OffresComponent
  },
  {
    path: 'courAdmin',
    component: CoursAdminComponent,
    canActivate: [PersonnelUserTypeGuard]
  },
  {
    path: 'clientAdmin',
    component: ClientAdminComponent,
    canActivate: [PersonnelUserTypeGuard]
  },
  {
    path: 'abonnementAdmin',
    component: AbonnementAdminComponent,
    canActivate: [PersonnelUserTypeGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'calendarAdmin',
    component: CalendarAdminComponent,
    canActivate: [PersonnelUserTypeGuard]
  },
  {
    path: 'personnelAdmin',
    component: PersonnelAdminComponent,
    canActivate: [AdminUserTypeGuard]
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