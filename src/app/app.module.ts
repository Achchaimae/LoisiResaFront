import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './Components/client/client/client.component';
import { ClientModule } from './Components/client/client.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactModule } from './Components/contact/contact.module';
import { GuideModule } from './Components/guide/guide.module';
import { RegisterComponent } from './Components/auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { JwtModule,JwtModuleOptions } from '@auth0/angular-jwt';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './Components/auth/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AdminComponent } from './Components/admin/admin/admin.component';
import { AdminNavComponent } from './Components/admin/admin-nav/admin-nav.component';
import { AccountsComponent } from './Components/admin/accounts/accounts.component';
import { DatePipe } from '@angular/common';
import { ClubsComponent } from './Components/admin/clubs/clubs.component';
import { authReducer } from './store/user.reducer';
import { AuthEffects } from './store/user.effects';

export function tokenGetter() {
  const token = getCookie('token');
  return  token != undefined ? token : null
}

export function getCookie(name: string): string | undefined {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop(): undefined;
}
const jwtModuleOptions: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter,
  },
};
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    AdminComponent,
    AdminNavComponent,
    AccountsComponent,
    ClubsComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClientModule,
    ContactModule,
    GuideModule,
    StoreModule.forRoot({ userFeature: authReducer}),
    JwtModule.forRoot(jwtModuleOptions),
    EffectsModule.forRoot([AuthEffects]),
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
