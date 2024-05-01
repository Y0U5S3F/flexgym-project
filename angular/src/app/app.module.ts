import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ChooseComponent } from './components/choose/choose.component';
import { ContactComponent } from './components/contact/contact.component';
import { JoinComponent } from './components/join/join.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableOffreComponent } from './components/table-offre/table-offre.component';
import { AddOffreComponent } from './components/add-offre/add-offre.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarClientComponent } from './pages/calendar-client/calendar-client.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OffreAdminComponent } from './pages/offre-admin/offre-admin.component';
import { ReclamComponent } from './pages/reclam/reclam.component';
import { HeroComponent } from './pages/home/component/hero/hero.component';
import { InfoComponent } from './pages/home/component/info/info.component';
import { FeaturesComponent } from './pages/home/component/features/features.component';
import { FormComponent } from './pages/reclam/component/form/form.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { TableCalendarComponent } from './components/table-calendar/table-calendar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddCoursComponent } from './components/add-cours/add-cours.component';
import { TableClientComponent } from './components/table-client/table-client.component';
import { TableCoursComponent } from './components/table-cours/table-cours.component';
import { ClientAdminComponent } from './pages/client-admin/client-admin.component';
import { CoursAdminComponent } from './pages/cours-admin/cours-admin.component';
import { OffresComponent } from './pages/offres/offres.component';
import { CardsComponent } from './pages/offres/cards/cards.component';
import { TextComponent } from './pages/offres/text/text.component';
import { CoursComponent } from './pages/cours/cours.component';
import { TexteComponent } from './pages/cours/texte/texte.component';
import { CoursCardsComponent } from './pages/cours/cours-cards/cours-cards.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CardProfileComponent } from './pages/profile/card-profile/card-profile.component';
import { AdminUserTypeGuard, PersonnelUserTypeGuard, RegularUserTypeGuard } from './services/user-type.guard';
import { CardTextComponent } from './pages/profile/card-text/card-text.component';
import { PersonnelAdminComponent } from './pages/personnel-admin/personnel-admin.component';
import { CalendarAdminComponent } from './pages/calendar-admin/calendar-admin.component';
import { TablePersonnelComponent } from './components/table-personnel/table-personnel.component';
import { AddPersonnelComponent } from './components/add-personnel/add-personnel.component';
import { AddCalendarComponent } from './components/add-calendar/add-calendar.component';
import { CalendarComponentComponent } from './components/calendar-component/calendar-component.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './components/table-client/pipe/search.pipe';
import { TableAbonnementComponent } from './components/table-abonnement/table-abonnement.component';
import { AddAbonnementComponent } from './components/add-abonnement/add-abonnement.component';
import { AbonnementAdminComponent } from './pages/abonnement-admin/abonnement-admin.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ChooseComponent,
    ContactComponent,
    JoinComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    TableOffreComponent,
    AddOffreComponent,
    CalendarClientComponent,
    HomeComponent,
    LoginComponent,
    OffreAdminComponent,
    ReclamComponent,
    HeroComponent,
    InfoComponent,
    FeaturesComponent,
    FormComponent,
    HeaderHomeComponent,
    TableCalendarComponent,
    AddClientComponent,
    AddCoursComponent,
    TableClientComponent,
    TableCoursComponent,
    ClientAdminComponent,
    CoursAdminComponent,
    OffresComponent,
    CardsComponent,
    TextComponent,
    CoursComponent,
    TexteComponent,
    CoursCardsComponent,
    ProfileComponent,
    CardProfileComponent,
    CardTextComponent,
    PersonnelAdminComponent,
    CalendarAdminComponent,
    TablePersonnelComponent,
    AddPersonnelComponent,
    AddCalendarComponent,
    CalendarComponentComponent,
    SearchPipe,
    TableAbonnementComponent,
    AddAbonnementComponent,
    AbonnementAdminComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [AdminUserTypeGuard, PersonnelUserTypeGuard, RegularUserTypeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
