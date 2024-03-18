import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CThomeComponent } from './cthome/cthome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CtClubComponent } from './ct-club/ct-club.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CtManagementComponent } from './ct-management/ct-management.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CThomeComponent,
    NavbarComponent,
    CtClubComponent,
    ReservationComponent,
    CtManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports : [
    CThomeComponent,
    CtClubComponent
  ]
})
export class ContactModule { }
