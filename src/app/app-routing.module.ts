import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/client/home/home.component';
import { ActivityComponent } from './Components/client/activity/activity.component';
import { PosteComponent } from './Components/client/poste/poste.component';
import { PaimentComponent } from './Components/client/paiment/paiment.component';
import { CThomeComponent } from './Components/contact/cthome/cthome.component';
import { CtClubComponent } from './Components/contact/ct-club/ct-club.component';
import { ReservationComponent } from './Components/contact/reservation/reservation.component';
import { CtManagementComponent } from './Components/contact/ct-management/ct-management.component';
import { GHomeComponent } from './Components/guide/ghome/ghome.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { AdminComponent } from './Components/admin/admin/admin.component';
import { RegisterComponent } from './Components/auth/register/register.component';



const routes: Routes = [
  {path: "" ,component:HomeComponent},
  {path: "home" ,component:HomeComponent},
  {path: "Activity", component :ActivityComponent},
  {path: "poste", component :PosteComponent},
  {path :"paiment", component:PaimentComponent},
  {path :"CtHome", component:CThomeComponent},
  {path :"CtClub", component:CtClubComponent},
  {path :"CtManagement", component:CtManagementComponent},
  {path :"CtReservation", component:ReservationComponent},
  {path :"guide", component: GHomeComponent},
  {path :"login",component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path:"admin",component:AdminComponent},
  {path :"**", component: NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
