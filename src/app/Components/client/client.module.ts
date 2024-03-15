import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PosteComponent } from './poste/poste.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ProgramComponent } from './program/program.component';
import { PaimentComponent } from './paiment/paiment.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ActivityComponent,
    CategorieComponent,
    PosteComponent,
    ReservationComponent,
    ProgramComponent,
    PaimentComponent,
    CreditCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ActivityComponent,
    PosteComponent,
    PaimentComponent,
    RouterModule 
  ]
})
export class ClientModule { }
