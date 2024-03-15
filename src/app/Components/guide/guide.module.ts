import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { GHomeComponent } from './ghome/ghome.component';
import { GuideCalendarComponent } from './guide-calendar/guide-calendar.component';



@NgModule({
  declarations: [
  
    NavbarComponent,
       GHomeComponent,
       GuideCalendarComponent,
       
       
       
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports :[
    GHomeComponent
  ]
})
export class GuideModule { }
