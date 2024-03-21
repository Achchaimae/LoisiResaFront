import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CThomeComponent } from './cthome/cthome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CtClubComponent } from './ct-club/ct-club.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CtManagementComponent } from './ct-management/ct-management.component';
import { FormsModule } from '@angular/forms';
import { AddGuideComponent } from './add-guide/add-guide.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AddActivityComponent } from './add-activity/add-activity.component';



@NgModule({
  declarations: [
    CThomeComponent,
    NavbarComponent,
    CtClubComponent,
    ReservationComponent,
    CtManagementComponent,
    AddGuideComponent,
    AddActivityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule, HttpClientModule
  ],
  exports : [
    CThomeComponent,
    CtClubComponent
  ]
})
export class ContactModule { }
