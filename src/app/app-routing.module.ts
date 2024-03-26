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
// import { AdminComponent } from './Components/admin/admin/admin.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { AccountsComponent } from './Components/admin/accounts/accounts.component';
import { ClubsComponent } from './Components/admin/clubs/clubs.component';
import { AboutUsComponent } from './Components/client/about-us/about-us.component';



const routes: Routes = [
  // client side
  {path: "" ,component:HomeComponent},
  {path: "home" ,component:HomeComponent},
  {path: "Activity", component :ActivityComponent},
  { path: 'poste/:id', component: PosteComponent ,canActivate: [AuthGuard] , data: { allowedRoles: ['client']}},
  {path :"paiment", component:PaimentComponent},
  {path :"aboutUs",component:AboutUsComponent},
  //contact side 
  {path :"CtHome", component:CThomeComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['contact']}},
  {path :"CtClub", component:CtClubComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['contact']}},
  {path :"CtManagement", component:CtManagementComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['contact']}},
  {path :"CtReservation", component:ReservationComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['contact']}},
  // guide side
  {path :"guide", component: GHomeComponent},
  {path :"login",component:LoginComponent},
  {path: "register", component:RegisterComponent},
  // admin side
  {path:"admin",redirectTo :"accounts"},
  {path:"accounts",component:AccountsComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['admin']}},
  {path:"Clubs",component:ClubsComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['admin']}},
  {path :"**", component: NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
